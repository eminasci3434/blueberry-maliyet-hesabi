// results.js - Analiz Sonuçları Sayfası

let currentAnalysisData = null;

document.addEventListener('DOMContentLoaded', function() {
    // localStorage'dan verileri oku
    const storedData = localStorage.getItem('blueberryAnalysisData');
    
    if (!storedData) {
        // Veri yoksa hata mesajı göster ve ana sayfaya yönlendir
        const errorMessage = `
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 48px; margin-bottom: 20px;">⚠️</div>
                <h2 style="color: #202124; margin-bottom: 16px;">Analiz Verisi Bulunamadı</h2>
                <p style="color: #5f6368; margin-bottom: 30px; font-size: 16px;">
                    Analiz sonuçlarını görmek için önce girdi bilgilerini doldurup hesaplama yapmalısınız.
                </p>
                <a href="index.html#girdi-bilgileri" class="sites-button-primary" style="display: inline-block; text-decoration: none; font-size: 16px; padding: 14px 32px;">
                    Girdi Bilgilerine Git
                </a>
            </div>
        `;
        
        document.getElementById('investment-costs-content').innerHTML = errorMessage;
        document.getElementById('annual-operating-costs-content').innerHTML = '';
        document.getElementById('7year-projection-content').innerHTML = '';
        return;
    }
    
    try {
        console.log('localStorage\'dan veri okunuyor...');
        console.log('Ham veri uzunluğu:', storedData ? storedData.length : 0);
        
        currentAnalysisData = JSON.parse(storedData);
        console.log('Veri parse edildi:', currentAnalysisData);
        
        // Veri yapısını kontrol et
        if (!currentAnalysisData) {
            throw new Error('Veri boş');
        }
        
        if (!currentAnalysisData.investmentCosts) {
            throw new Error('Yatırım maliyetleri bulunamadı');
        }
        
        if (!currentAnalysisData.annualCosts) {
            throw new Error('Yıllık işletme maliyetleri bulunamadı');
        }
        
        if (!currentAnalysisData.projection7Years) {
            throw new Error('7 yıllık projeksiyon bulunamadı');
        }
        
        console.log('Veri yapısı doğrulandı');
        
        // Analiz sonuçlarını göster
        try {
            console.log('Yatırım maliyetleri gösteriliyor...');
            displayInvestmentCosts(currentAnalysisData.investmentCosts);
        } catch (error) {
            console.error('Yatırım maliyetleri gösterilirken hata:', error);
            throw new Error('Yatırım maliyetleri gösterilemedi: ' + error.message);
        }
        
        try {
            console.log('Yıllık işletme maliyetleri gösteriliyor...');
            displayAnnualOperatingCosts(currentAnalysisData.annualCosts);
        } catch (error) {
            console.error('Yıllık işletme maliyetleri gösterilirken hata:', error);
            throw new Error('Yıllık işletme maliyetleri gösterilemedi: ' + error.message);
        }
        
        try {
            console.log('7 yıllık projeksiyon gösteriliyor...');
            display7YearProjection(currentAnalysisData.projection7Years);
        } catch (error) {
            console.error('7 yıllık projeksiyon gösterilirken hata:', error);
            throw new Error('7 yıllık projeksiyon gösterilemedi: ' + error.message);
        }
        
        console.log('Tüm analiz sonuçları başarıyla gösterildi');
    } catch (error) {
        console.error('Veri okunamadı:', error);
        console.error('Hata detayları:', {
            message: error.message,
            stack: error.stack,
            storedData: storedData ? storedData.substring(0, 500) : 'null'
        });
        
        const errorMessage = `
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 48px; margin-bottom: 20px;">❌</div>
                <h2 style="color: #202124; margin-bottom: 16px;">Veri Okunamadı</h2>
                <p style="color: #5f6368; margin-bottom: 20px; font-size: 16px;">
                    Analiz verileri okunurken bir hata oluştu.
                </p>
                <p style="color: #ea4335; margin-bottom: 30px; font-size: 14px; font-family: monospace; background: #f5f5f5; padding: 10px; border-radius: 4px;">
                    ${error.message || 'Bilinmeyen hata'}
                </p>
                <p style="color: #5f6368; margin-bottom: 30px; font-size: 14px;">
                    Lütfen tarayıcı konsolunu açın (F12) ve hata detaylarını kontrol edin.
                </p>
                <a href="index.html#girdi-bilgileri" class="sites-button-primary" style="display: inline-block; text-decoration: none; font-size: 16px; padding: 14px 32px;">
                    Girdi Bilgilerine Git
                </a>
            </div>
        `;
        
        const investmentDiv = document.getElementById('investment-costs-content');
        if (investmentDiv) {
            investmentDiv.innerHTML = errorMessage;
        }
        const annualDiv = document.getElementById('annual-operating-costs-content');
        if (annualDiv) {
            annualDiv.innerHTML = '';
        }
        const projectionDiv = document.getElementById('7year-projection-content');
        if (projectionDiv) {
            projectionDiv.innerHTML = '';
        }
    }
});

// Yatırım maliyetlerini göster (düzenlenebilir birim fiyatlarla)
function displayInvestmentCosts(costs) {
    const contentDiv = document.getElementById('investment-costs-content');
    if (!contentDiv) return;
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    
    // Saksı fiyatları için dolar kuru (varsayılan 44)
    let dollarRate = 44;
    const dollarRateInput = document.getElementById('dollar-rate-results');
    
    let tableHtml = `
        <div style="margin-bottom: 20px; padding: 16px; background-color: #e8f0fe; border-radius: 8px; border-left: 3px solid #1a73e8;">
            <label style="font-weight: 600; color: #202124; margin-right: 12px;">💵 Dolar Kuru (Saksı Fiyatları İçin):</label>
            <input type="number" id="dollar-rate-results" value="${dollarRate}" step="0.01" min="0" style="padding: 8px 12px; border: 1px solid #dadce0; border-radius: 4px; font-size: 14px; width: 100px; text-align: right;">
            <small style="display: block; margin-top: 8px; color: #5f6368; font-size: 12px;">Saksı fiyatları dolar cinsinden olduğu için TL'ye çevirmek için kullanılır</small>
        </div>
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <thead>
                    <tr style="background: linear-gradient(135deg, #1a73e8 0%, #1976d2 100%); color: white;">
                        <th style="padding: 16px; text-align: left; font-weight: 600; border-bottom: 2px solid #1565c0;">Kalem</th>
                        <th style="padding: 16px; text-align: left; font-weight: 600; border-bottom: 2px solid #1565c0;">Miktar / Açıklama</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600; border-bottom: 2px solid #1565c0;">Birim Fiyat (₺)</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600; border-bottom: 2px solid #1565c0;">Toplam Maliyet</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    costs.items.forEach((item, index) => {
        const rowColor = index % 2 === 0 ? '#f8f9fa' : '#ffffff';
        const itemId = `item-${index}`;
        // Quantity parse işlemi - Türkçe formatından (1.234,56) veya İngilizce formatından (1234.56) parse et
        let quantityStr = item.quantity.toString();
        // Türkçe formatındaki binlik ayırıcıları kaldır ve ondalık ayırıcıyı noktaya çevir
        quantityStr = quantityStr.replace(/\./g, '').replace(/,/g, '.');
        const quantity = parseFloat(quantityStr) || 0;
        const isPot = item.name.includes('Saksı');
        
        // Toplam maliyet değişkenini baştan tanımla
        let totalCost = item.total || 0;
        const calculatedTotal = item.calculatedTotal || 0;
        
        // Saksı için özel işlem
        let inputHtml = '';
        if (isPot) {
            // Saksı için dolar cinsinden fiyat ve dolar kuru ile hesaplama
            const potSize = item.description.match(/(\d+)L/)?.[1] || '';
            const potPriceUSD = getPotPriceUSD(potSize);
            const calculatedPrice = potPriceUSD * dollarRate;
            // Saksı için toplam maliyet = birim fiyat * miktar
            totalCost = calculatedPrice * quantity;
            inputHtml = `
                <div style="display: flex; align-items: center; gap: 6px; justify-content: flex-end;">
                    <span style="font-size: 11px; color: #9aa0a6;">(${potPriceUSD.toFixed(2)} USD)</span>
                    <input type="number" id="unit-price-${itemId}" value="${calculatedPrice.toFixed(2)}" step="0.01" min="0" 
                           style="padding: 6px 10px; border: 1px solid #dadce0; border-radius: 4px; font-size: 13px; width: 100px; text-align: right; font-weight: 600; background-color: #f5f5f5; cursor: not-allowed;"
                           readonly>
                </div>
            `;
        } else {
            // Diğer kalemler için düzenlenebilir birim fiyat
            // Eğer calculatedTotal varsa, birim fiyatı otomatik hesapla
            let unitPrice = item.unitPrice || 0;
            
            // Girdi bölümünden hesaplanan toplam maliyet varsa ve birim fiyat 0 ise, otomatik hesapla
            // Veya calculatedTotal varsa onu kullan (substrat için otomatik hesaplanan değer)
            if (calculatedTotal > 0 && quantity > 0) {
                if (unitPrice === 0 || unitPrice < 0.01) {
                    // Birim fiyat yoksa veya çok küçükse, calculatedTotal'dan hesapla
                    unitPrice = calculatedTotal / quantity;
                }
                // Toplam maliyeti calculatedTotal'dan al
                totalCost = calculatedTotal;
            } else if (totalCost === 0 && unitPrice > 0 && quantity > 0) {
                // Eğer toplam maliyet 0 ama birim fiyat varsa, hesapla
                totalCost = unitPrice * quantity;
            }
            
            inputHtml = `
                <input type="number" id="unit-price-${itemId}" value="${unitPrice.toFixed(2)}" step="0.01" min="0" 
                       style="padding: 6px 10px; border: 1px solid #dadce0; border-radius: 4px; font-size: 13px; width: 120px; text-align: right; font-weight: 600;"
                       onchange="updateItemTotal('${itemId}', ${quantity})"
                       data-calculated-total="${calculatedTotal}"
                       data-quantity="${quantity}">
            `;
            
            // Toplam maliyeti güncelle
            if (calculatedTotal > 0 && totalCost === 0) {
                totalCost = calculatedTotal;
            }
        }
        
        // Son kontrol: Eğer hala toplam maliyet yoksa, item.total veya calculatedTotal kullan
        if (totalCost === 0) {
            totalCost = item.total || calculatedTotal || 0;
        }
        
        tableHtml += `
            <tr style="background-color: ${rowColor};">
                <td style="padding: 14px; font-weight: 500; color: #202124; border-bottom: 1px solid #e8eaed;">${item.name}</td>
                <td style="padding: 14px; color: #5f6368; border-bottom: 1px solid #e8eaed;">
                    <div style="font-weight: 500; margin-bottom: 4px;">${item.quantity} ${item.unit}</div>
                    <div style="font-size: 12px; color: #9aa0a6;">${item.description}</div>
                </td>
                <td style="padding: 14px; text-align: right; color: #5f6368; border-bottom: 1px solid #e8eaed;" data-quantity="${quantity}">
                    ${inputHtml}
                </td>
                <td style="padding: 14px; text-align: right; color: #1a73e8; font-weight: 600; border-bottom: 1px solid #e8eaed;" id="total-${itemId}" data-calculated-total="${calculatedTotal || 0}">
                    ${formatCurrency(totalCost)}
                </td>
            </tr>
        `;
    });
    
    tableHtml += `
                </tbody>
                <tfoot>
                    <tr style="background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);">
                        <td colspan="3" style="padding: 20px; text-align: right; font-weight: 700; font-size: 18px; color: #202124; border-top: 2px solid #dadce0;">
                            💰 Toplam Yatırım Maliyeti:
                        </td>
                        <td style="padding: 20px; text-align: right; font-weight: 700; font-size: 24px; color: #1a73e8; border-top: 2px solid #dadce0;" id="total-investment-cost">
                            ${formatCurrency(costs.total)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    `;
    
    contentDiv.innerHTML = tableHtml;
    
    // Dolar kuru değiştiğinde tüm saksı fiyatlarını güncelle (innerHTML'den sonra)
    setTimeout(() => {
        const dollarRateInputElement = document.getElementById('dollar-rate-results');
        if (dollarRateInputElement) {
            dollarRateInputElement.addEventListener('input', function() {
                const newDollarRate = parseFloat(this.value) || 44;
                // Tüm saksı satırlarını güncelle
                costs.items.forEach((item, index) => {
                    if (item.name.includes('Saksı')) {
                        const itemId = `item-${index}`;
                        const potSize = item.description.match(/(\d+)L/)?.[1] || '';
                        const potPriceUSD = getPotPriceUSD(potSize);
                        const newUnitPrice = potPriceUSD * newDollarRate;
                        const unitPriceInput = document.getElementById(`unit-price-${itemId}`);
                        const row = unitPriceInput?.closest('tr');
                        const quantityCell = row?.querySelector('td[data-quantity]');
                        const quantity = parseFloat(quantityCell?.getAttribute('data-quantity')) || 0;
                        
                        if (unitPriceInput) {
                            unitPriceInput.value = newUnitPrice.toFixed(2);
                            updateItemTotal(itemId, quantity);
                        }
                    }
                });
            });
        }
    }, 100);
}

// Birim fiyat değiştiğinde toplam maliyeti güncelle
function updateItemTotal(itemId, quantity) {
    const unitPriceInput = document.getElementById(`unit-price-${itemId}`);
    const totalCell = document.getElementById(`total-${itemId}`);
    
    if (!unitPriceInput || !totalCell) return;
    
    const unitPrice = parseFloat(unitPriceInput.value) || 0;
    const total = quantity * unitPrice;
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    
    // Kullanıcı birim fiyat girdi, toplam maliyeti güncelle
    totalCell.textContent = formatCurrency(total);
    // calculatedTotal attribute'unu sıfırla (artık kullanıcı girdiği değer geçerli)
    totalCell.setAttribute('data-calculated-total', '0');
    updateTotalInvestment();
}


// Toplam yatırım maliyetini güncelle
function updateTotalInvestment() {
    const totalCell = document.getElementById('total-investment-cost');
    if (!totalCell) return;
    
    let total = 0;
    const table = totalCell.closest('table');
    const rows = table?.querySelectorAll('tbody tr');
    
    if (rows) {
        rows.forEach(row => {
            const rowTotalCell = row.querySelector('td[id^="total-"]');
            if (rowTotalCell) {
                // Türkçe formatındaki sayıyı parse et
                let totalText = rowTotalCell.textContent.trim();
                // TL sembolünü ve boşlukları kaldır
                totalText = totalText.replace(/₺/g, '').replace(/\s/g, '');
                // Binlik ayırıcıları kaldır (nokta) ve ondalık ayırıcıyı noktaya çevir
                totalText = totalText.replace(/\./g, '').replace(/,/g, '.');
                const value = parseFloat(totalText) || 0;
                total += value;
            }
        });
    }
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    
    totalCell.textContent = formatCurrency(total);
    
    // currentAnalysisData'yı güncelle
    if (currentAnalysisData && currentAnalysisData.investmentCosts) {
        currentAnalysisData.investmentCosts.total = total;
    }
    
    // 7 yıllık projeksiyonu güncelle
    updateProjection();
}

// Saksı fiyatını USD cinsinden al
function getPotPriceUSD(potSize) {
    const pricesUSD = {
        '20': 0.91,
        '25': 0.91,
        '30': 1.01,
        '40': 1.36
    };
    return pricesUSD[potSize] || 0.91;
}

// Yıllık işletme maliyetlerini göster (tablo formatında)
function displayAnnualOperatingCosts(costs) {
    const contentDiv = document.getElementById('annual-operating-costs-content');
    if (!contentDiv) return;
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    
    let tableHtml = `
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <thead>
                    <tr style="background: linear-gradient(135deg, #1a73e8 0%, #1976d2 100%); color: white;">
                        <th style="padding: 16px; text-align: left; font-weight: 600; border-bottom: 2px solid #1565c0;">Kalem</th>
                        <th style="padding: 16px; text-align: left; font-weight: 600; border-bottom: 2px solid #1565c0;">Miktar / Açıklama</th>
                        <th style="padding: 16px; text-align: left; font-weight: 600; border-bottom: 2px solid #1565c0;">Birim</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600; border-bottom: 2px solid #1565c0;">Günlük Fiyat (₺)</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600; border-bottom: 2px solid #1565c0;">Yıllık Toplam Maliyet</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    costs.items.forEach((item, index) => {
        const rowColor = index % 2 === 0 ? '#f8f9fa' : '#ffffff';
        const itemId = `annual-item-${index}`;
        const quantity = parseFloat(item.quantity) || 0;
        const dailyPrice = item.dailyPrice || 0;
        const annualTotal = item.annualTotal || 0;
        const isWater = item.name.includes('Sulama Suyu');
        
        // Sulama suyu için özel input (m³ fiyatı)
        let priceInputHtml = '';
        if (isWater) {
            // m³ fiyatı input'u
            priceInputHtml = `
                <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
                    <input type="number" id="daily-price-${itemId}" value="${dailyPrice.toFixed(2)}" step="0.01" min="0" 
                           style="padding: 6px 10px; border: 1px solid #dadce0; border-radius: 4px; font-size: 13px; width: 120px; text-align: right; font-weight: 600;"
                           onchange="updateAnnualItemTotal('${itemId}', ${quantity})"
                           data-quantity="${quantity}"
                           data-is-water="true"
                           placeholder="TL/m³">
                    <small style="font-size: 11px; color: #9aa0a6;">TL/m³</small>
                </div>
            `;
        } else {
            // Diğer kalemler için normal günlük fiyat input'u
            priceInputHtml = `
                <input type="number" id="daily-price-${itemId}" value="${dailyPrice.toFixed(2)}" step="0.01" min="0" 
                       style="padding: 6px 10px; border: 1px solid #dadce0; border-radius: 4px; font-size: 13px; width: 120px; text-align: right; font-weight: 600;"
                       onchange="updateAnnualItemTotal('${itemId}', ${quantity})"
                       data-quantity="${quantity}">
            `;
        }
        
        tableHtml += `
            <tr style="background-color: ${rowColor};">
                <td style="padding: 14px; font-weight: 500; color: #202124; border-bottom: 1px solid #e8eaed;">${item.name}</td>
                <td style="padding: 14px; color: #5f6368; border-bottom: 1px solid #e8eaed;">
                    <div style="font-weight: 500; margin-bottom: 4px;">${item.quantity} ${item.unit}</div>
                    <div style="font-size: 12px; color: #9aa0a6;">${item.description}</div>
                </td>
                <td style="padding: 14px; color: #5f6368; border-bottom: 1px solid #e8eaed;">${item.unit}</td>
                <td style="padding: 14px; text-align: right; color: #5f6368; border-bottom: 1px solid #e8eaed;" data-quantity="${quantity}">
                    ${priceInputHtml}
                </td>
                <td style="padding: 14px; text-align: right; color: #1a73e8; font-weight: 600; border-bottom: 1px solid #e8eaed;" id="annual-total-${itemId}">
                    ${formatCurrency(annualTotal)}
                </td>
            </tr>
        `;
    });
    
    tableHtml += `
                </tbody>
                <tfoot>
                    <tr style="background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);">
                        <td colspan="4" style="padding: 20px; text-align: right; font-weight: 700; font-size: 18px; color: #202124; border-top: 2px solid #dadce0;">
                            💼 Toplam Yıllık İşletme Maliyeti:
                        </td>
                        <td style="padding: 20px; text-align: right; font-weight: 700; font-size: 24px; color: #1a73e8; border-top: 2px solid #dadce0;" id="total-annual-cost">
                            ${formatCurrency(costs.total)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    `;
    
    contentDiv.innerHTML = tableHtml;
    
    // Event listener'ları ekle
    setTimeout(() => {
        costs.items.forEach((item, index) => {
            const itemId = `annual-item-${index}`;
            const dailyPriceInput = document.getElementById(`daily-price-${itemId}`);
            if (dailyPriceInput) {
                dailyPriceInput.addEventListener('change', function() {
                    const quantity = parseFloat(this.getAttribute('data-quantity')) || 0;
                    updateAnnualItemTotal(itemId, quantity);
                });
                dailyPriceInput.addEventListener('input', function() {
                    const quantity = parseFloat(this.getAttribute('data-quantity')) || 0;
                    updateAnnualItemTotal(itemId, quantity);
                });
            }
        });
    }, 100);
}

// Yıllık işletme maliyeti kalemi için toplam güncelle
function updateAnnualItemTotal(itemId, quantity) {
    const dailyPriceInput = document.getElementById(`daily-price-${itemId}`);
    const totalCell = document.getElementById(`annual-total-${itemId}`);
    
    if (!dailyPriceInput || !totalCell) return;
    
    const price = parseFloat(dailyPriceInput.value) || 0;
    const isWater = dailyPriceInput.getAttribute('data-is-water') === 'true';
    
    // Hasat işçiliği için özel hesaplama (sadece hasat döneminde)
    let annualTotal = 0;
    const row = dailyPriceInput.closest('tr');
    const itemName = row?.querySelector('td:first-child')?.textContent || '';
    
    if (isWater) {
        // Sulama suyu: m³ fiyatı × günlük m³ miktarı × 365 gün
        annualTotal = price * quantity * 365;
    } else if (itemName.includes('Hasat İşçiliği')) {
        // Hasat işçiliği: günlük fiyat × kişi sayısı × hasat süresi (gün)
        const harvestDuration = currentAnalysisData?.harvestDuration || 45;
        annualTotal = price * quantity * harvestDuration;
    } else {
        // Diğer kalemler: günlük fiyat × miktar × 365 gün
        annualTotal = price * quantity * 365;
    }
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    
    totalCell.textContent = formatCurrency(annualTotal);
    updateTotalAnnualCost();
}

// Toplam yıllık işletme maliyetini güncelle
function updateTotalAnnualCost() {
    const totalCell = document.getElementById('total-annual-cost');
    if (!totalCell) return;
    
    let total = 0;
    const table = totalCell.closest('table');
    const rows = table?.querySelectorAll('tbody tr');
    
    if (rows) {
        rows.forEach(row => {
            const rowTotalCell = row.querySelector('td[id^="annual-total-"]');
            if (rowTotalCell) {
                // Türkçe formatındaki sayıyı parse et
                let totalText = rowTotalCell.textContent.trim();
                totalText = totalText.replace(/₺/g, '').replace(/\s/g, '');
                totalText = totalText.replace(/\./g, '').replace(/,/g, '.');
                const value = parseFloat(totalText) || 0;
                total += value;
            }
        });
    }
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    
    totalCell.textContent = formatCurrency(total);
    
    // currentAnalysisData'yı güncelle
    if (currentAnalysisData && currentAnalysisData.annualCosts) {
        currentAnalysisData.annualCosts.total = total;
    }
    
    // 7 yıllık projeksiyonu güncelle
    updateProjection();
}

// 7 yıllık projeksiyonu güncelle (yatırım veya işletme maliyeti değiştiğinde)
function updateProjection() {
    // Projeksiyon tablosu yoksa güncelleme yapma
    const tbody = document.getElementById('projection-tbody');
    if (!tbody) return;
    
    const pricePerKg = parseFloat(document.getElementById('blueberry-price-per-kg')?.value) || 100;
    const inflationRate = parseFloat(document.getElementById('inflation-rate-input')?.value) || 5;
    updateProjectionWithNewPrice(pricePerKg, inflationRate);
}

// 7 yıllık projeksiyonu göster
function display7YearProjection(projection) {
    const contentDiv = document.getElementById('7year-projection-content');
    if (!contentDiv) return;
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    
    // Varsayılan satış fiyatı (TL/kg) - ilk yıldan hesapla
    const defaultPricePerKg = projection[0]?.revenue && projection[0]?.totalHarvest 
        ? projection[0].revenue / projection[0].totalHarvest 
        : 100;
    
    // Enflasyon oranı (varsayılan 5%)
    const defaultInflationRate = currentAnalysisData?.inflationRate || 5;
    
    let tableHtml = `
        <div style="margin-bottom: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="padding: 16px; background-color: #e8f0fe; border-radius: 8px; border-left: 3px solid #1a73e8;">
                <label style="font-weight: 600; color: #202124; margin-right: 12px; display: inline-block; margin-bottom: 8px;">🫐 Blueberry Satış Fiyatı:</label>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <input type="number" id="blueberry-price-per-kg" value="${defaultPricePerKg.toFixed(2)}" step="0.01" min="0" 
                           style="padding: 8px 12px; border: 1px solid #dadce0; border-radius: 4px; font-size: 14px; width: 150px; text-align: right; font-weight: 600;">
                    <span style="font-size: 14px; color: #5f6368; font-weight: 500;">TL/kg</span>
                </div>
                <small style="display: block; margin-top: 8px; color: #5f6368; font-size: 12px;">Fiyat değiştiğinde gelir ve kar hesaplamaları otomatik güncellenir</small>
            </div>
            <div style="padding: 16px; background-color: #fff3e0; border-radius: 8px; border-left: 3px solid #ff9800;">
                <label style="font-weight: 600; color: #202124; margin-right: 12px; display: inline-block; margin-bottom: 8px;">📈 Enflasyon Oranı:</label>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <input type="number" id="inflation-rate-input" value="${defaultInflationRate.toFixed(1)}" step="0.1" min="0" max="100" 
                           style="padding: 8px 12px; border: 1px solid #dadce0; border-radius: 4px; font-size: 14px; width: 150px; text-align: right; font-weight: 600;">
                    <span style="font-size: 14px; color: #5f6368; font-weight: 500;">%</span>
                </div>
                <small style="display: block; margin-top: 8px; color: #5f6368; font-size: 12px;">2. yıldan itibaren işletme maliyetine eklenecek yıllık enflasyon oranı</small>
            </div>
        </div>
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                <thead>
                    <tr style="background: linear-gradient(135deg, #1a73e8 0%, #1976d2 100%); color: white;">
                        <th style="padding: 16px; text-align: left; font-weight: 600;">Yıl</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600;">Bitki Başı Verim (kg)</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600;">Toplam Hasat (kg)</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600;">Gelir (₺)</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600;">İşletme Maliyeti (₺)</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600;">Net Kar (₺)</th>
                        <th style="padding: 16px; text-align: right; font-weight: 600;">Birikimli Kar (₺)</th>
                    </tr>
                </thead>
                <tbody id="projection-tbody">
    `;
    
    projection.forEach((year, index) => {
        const rowColor = index % 2 === 0 ? '#f8f9fa' : '#ffffff';
        const netProfitColor = year.netProfit >= 0 ? '#2e7d32' : '#c62828';
        const cumulativeColor = year.cumulativeProfit >= 0 ? '#2e7d32' : '#c62828';
        
        // 1. yıl için yatırım maliyetini de göster
        const investmentTotal = currentAnalysisData?.investmentCosts?.total || 0;
        const annualOperatingCost = currentAnalysisData?.annualCosts?.total || 0;
        const isFirstYear = year.year === 1;
        const operatingCostDisplay = isFirstYear ? year.operatingCost : year.operatingCost;
        const operatingCostDescription = isFirstYear 
            ? `Yıllık işletme: ${formatCurrency(annualOperatingCost)} + Yatırım: ${formatCurrency(investmentTotal)}`
            : '';
        
        tableHtml += `
            <tr style="background-color: ${rowColor};" data-year="${year.year}" data-yield="${year.yieldPerPlant}" data-harvest="${year.totalHarvest}" data-operating-cost="${annualOperatingCost}" data-investment="${isFirstYear ? investmentTotal : 0}">
                <td style="padding: 14px; font-weight: 600; color: #202124;">${year.year}</td>
                <td style="padding: 14px; text-align: right; color: #5f6368;">${year.yieldPerPlant.toFixed(2)}</td>
                <td style="padding: 14px; text-align: right; color: #5f6368;">${year.totalHarvest.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}</td>
                <td style="padding: 14px; text-align: right; color: #1a73e8; font-weight: 600;" class="revenue-cell">${formatCurrency(year.revenue)}</td>
                <td style="padding: 14px; text-align: right; color: #5f6368;" class="operating-cost-cell">
                    ${formatCurrency(operatingCostDisplay)}
                    ${operatingCostDescription ? `<div style="font-size: 11px; color: #9aa0a6; margin-top: 4px;">${operatingCostDescription}</div>` : ''}
                </td>
                <td style="padding: 14px; text-align: right; color: ${netProfitColor}; font-weight: 600;" class="net-profit-cell">${formatCurrency(year.netProfit)}</td>
                <td style="padding: 14px; text-align: right; color: ${cumulativeColor}; font-weight: 700;" class="cumulative-profit-cell">${formatCurrency(year.cumulativeProfit)}</td>
            </tr>
        `;
    });
    
    tableHtml += `
                </tbody>
            </table>
        </div>
        <div id="projection-summary" style="margin-top: 24px; padding: 20px; background-color: #e8f0fe; border-radius: 8px; border-left: 4px solid #1a73e8;">
            <div style="font-size: 14px; color: #5f6368; line-height: 1.8;">
                <strong style="color: #202124;">📊 Projeksiyon Özeti:</strong><br>
                • Toplam 7 yıllık gelir: <strong style="color: #1a73e8;" id="summary-revenue">${formatCurrency(projection[projection.length - 1].cumulativeRevenue)}</strong><br>
                • Toplam 7 yıllık maliyet: <strong style="color: #ea4335;" id="summary-costs">${formatCurrency(projection[projection.length - 1].cumulativeCosts)}</strong><br>
                • 7. yıl sonunda birikimli kar: <strong style="color: ${projection[projection.length - 1].cumulativeProfit >= 0 ? '#2e7d32' : '#c62828'}; font-size: 18px;" id="summary-profit">${formatCurrency(projection[projection.length - 1].cumulativeProfit)}</strong>
            </div>
        </div>
    `;
    
    contentDiv.innerHTML = tableHtml;
    
    // Fiyat değiştiğinde projeksiyonu güncelle
    const priceInput = document.getElementById('blueberry-price-per-kg');
    if (priceInput) {
        priceInput.addEventListener('input', function() {
            const inflationRate = parseFloat(document.getElementById('inflation-rate-input')?.value) || 5;
            updateProjectionWithNewPrice(parseFloat(this.value) || 0, inflationRate);
        });
        priceInput.addEventListener('change', function() {
            const inflationRate = parseFloat(document.getElementById('inflation-rate-input')?.value) || 5;
            updateProjectionWithNewPrice(parseFloat(this.value) || 0, inflationRate);
        });
    }
    
    // Enflasyon oranı değiştiğinde projeksiyonu güncelle
    const inflationInput = document.getElementById('inflation-rate-input');
    if (inflationInput) {
        inflationInput.addEventListener('input', function() {
            const pricePerKg = parseFloat(document.getElementById('blueberry-price-per-kg')?.value) || 100;
            updateProjectionWithNewPrice(pricePerKg, parseFloat(this.value) || 5);
        });
        inflationInput.addEventListener('change', function() {
            const pricePerKg = parseFloat(document.getElementById('blueberry-price-per-kg')?.value) || 100;
            updateProjectionWithNewPrice(pricePerKg, parseFloat(this.value) || 5);
        });
    }
}

// Yeni fiyat ve enflasyon oranıyla projeksiyonu güncelle
function updateProjectionWithNewPrice(pricePerKg, inflationRate = 5) {
    const tbody = document.getElementById('projection-tbody');
    if (!tbody) return;
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    
    const rows = tbody.querySelectorAll('tr');
    let cumulativeRevenue = 0;
    let cumulativeCosts = 0;
    
    // Yatırım maliyetini al (1. yılda işletme maliyetine eklenecek)
    const investmentTotal = currentAnalysisData?.investmentCosts?.total || 0;
    const annualOperatingCost = currentAnalysisData?.annualCosts?.total || 0;
    
    // Enflasyon çarpanı
    const inflationMultiplier = 1 + (inflationRate / 100);
    let previousYearOperatingCost = annualOperatingCost; // Bir önceki yılın işletme maliyeti
    
    rows.forEach((row, index) => {
        const year = parseInt(row.getAttribute('data-year')) || (index + 1);
        const yieldPerPlant = parseFloat(row.getAttribute('data-yield')) || 0;
        const totalHarvest = parseFloat(row.getAttribute('data-harvest')) || 0;
        const investmentCost = parseFloat(row.getAttribute('data-investment')) || 0;
        
        // İşletme maliyeti hesaplama (enflasyon dahil)
        let operatingCost;
        if (year === 1) {
            // 1. yıl: Yıllık işletme maliyeti + Yatırım maliyeti
            operatingCost = annualOperatingCost + investmentTotal;
            previousYearOperatingCost = annualOperatingCost; // Sonraki yıl için temel maliyet
        } else {
            // 2. yıldan itibaren: Bir önceki yılın işletme maliyetine enflasyon ekle
            previousYearOperatingCost = previousYearOperatingCost * inflationMultiplier;
            operatingCost = previousYearOperatingCost;
        }
        
        // Yeni gelir hesapla
        const revenue = totalHarvest * pricePerKg;
        const netProfit = revenue - operatingCost;
        
        // Birikimli hesaplamalar
        cumulativeRevenue += revenue;
        cumulativeCosts += operatingCost;
        const cumulativeProfit = cumulativeRevenue - cumulativeCosts;
        
        // Renk belirleme
        const netProfitColor = netProfit >= 0 ? '#2e7d32' : '#c62828';
        const cumulativeColor = cumulativeProfit >= 0 ? '#2e7d32' : '#c62828';
        
        // Hücreleri güncelle
        const revenueCell = row.querySelector('.revenue-cell');
        const operatingCostCell = row.querySelector('.operating-cost-cell');
        const netProfitCell = row.querySelector('.net-profit-cell');
        const cumulativeProfitCell = row.querySelector('.cumulative-profit-cell');
        
        if (revenueCell) revenueCell.textContent = formatCurrency(revenue);
        if (operatingCostCell) {
            if (year === 1) {
                operatingCostCell.innerHTML = `
                    ${formatCurrency(operatingCost)}
                    <div style="font-size: 11px; color: #9aa0a6; margin-top: 4px;">
                        Yıllık işletme: ${formatCurrency(annualOperatingCost)} + Yatırım: ${formatCurrency(investmentTotal)}
                    </div>
                `;
            } else {
                operatingCostCell.innerHTML = `
                    ${formatCurrency(operatingCost)}
                    <div style="font-size: 11px; color: #9aa0a6; margin-top: 4px;">
                        Önceki yıl + %${inflationRate.toFixed(1)} enflasyon
                    </div>
                `;
            }
        }
        if (netProfitCell) {
            netProfitCell.textContent = formatCurrency(netProfit);
            netProfitCell.style.color = netProfitColor;
        }
        if (cumulativeProfitCell) {
            cumulativeProfitCell.textContent = formatCurrency(cumulativeProfit);
            cumulativeProfitCell.style.color = cumulativeColor;
        }
    });
    
    // Özet bölümünü güncelle
    const summaryRevenue = document.getElementById('summary-revenue');
    const summaryCosts = document.getElementById('summary-costs');
    const summaryProfit = document.getElementById('summary-profit');
    
    if (summaryRevenue) summaryRevenue.textContent = formatCurrency(cumulativeRevenue);
    if (summaryCosts) summaryCosts.textContent = formatCurrency(cumulativeCosts);
    if (summaryProfit) {
        const lastCumulativeProfit = cumulativeRevenue - cumulativeCosts;
        summaryProfit.textContent = formatCurrency(lastCumulativeProfit);
        summaryProfit.style.color = lastCumulativeProfit >= 0 ? '#2e7d32' : '#c62828';
    }
}

