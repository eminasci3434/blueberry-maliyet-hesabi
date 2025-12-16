// Sulama sistemleri ve ekipmanları
const irrigationSystems = {
    drip: {
        name: 'Damla Sulama (Drip Irrigation)',
        description: 'En yaygın kullanılan sistem. Su ve besin maddelerini doğrudan bitki kök bölgesine verir.',
        equipment: [
            { name: 'Ana Boru Hattı (PE veya PVC)', description: '16-32 mm çap, ana su kaynağından alanlara su taşır' },
            { name: 'Lateral Borular', description: '12-16 mm çap, ana borudan bitki sıralarına su dağıtır' },
            { name: 'Damlatıcılar', description: 'Saatte 1-4 litre kapasiteli, bitki başına 2-4 adet önerilir' },
            { name: 'Filtre Sistemi', description: 'Kum filtresi, disk filtre veya elek filtre (damlatıcı tıkanmasını önler)' },
            { name: 'Basınç Regülatörü', description: 'Sistem basıncını 1-2 bar aralığında tutar' },
            { name: 'Kontrol Vanaları', description: 'Manuel veya otomatik vanalar, bölgesel kontrol sağlar' },
            { name: 'Fertigasyon Sistemi', description: 'Venturi enjektör veya gübre tankı, sulama suyuna gübre ekler' },
            { name: 'Pompa İstasyonu', description: 'Su kaynağından sisteme su basar (gerekirse)' },
            { name: 'Zamanlayıcı/Kontrol Ünitesi', description: 'Otomatik sulama kontrolü için (opsiyonel ama önerilir)' }
        ],
        sources: [
            { name: 'Oregon State University - Blueberry Irrigation', url: 'https://extension.oregonstate.edu/crop-production/berries/blueberry-production' },
            { name: 'Michigan State University - Irrigation Systems', url: 'https://www.canr.msu.edu/blueberries/' },
            { name: 'Wikifarmer - Blueberry Irrigation', url: 'https://wikifarmer.com/library/tr/article/blueberry-su-i%CC%87htiyac%C4%B1-ve-sulama-y%C3%B6ntemleri' }
        ]
    },
    sprinkler: {
        name: 'Sprinkler Sulama (Yağmurlama)',
        description: 'Geniş alanlar için uygun. Havadan su püskürtme sistemi.',
        equipment: [
            { name: 'Ana Boru Hattı', description: '50-100 mm çap, yüksek basınçlı su taşır' },
            { name: 'Lateral Borular', description: '32-50 mm çap, sprinkler başlıklarına su iletir' },
            { name: 'Sprinkler Başlıkları', description: 'Sabit veya hareketli, 360° veya sektörlü püskürtme' },
            { name: 'Filtre Sistemi', description: 'Kum filtresi, su kalitesini korur' },
            { name: 'Basınç Pompası', description: 'Yüksek basınç (3-5 bar) sağlar' },
            { name: 'Kontrol Vanaları', description: 'Bölgesel kontrol için manuel/otomatik vanalar' },
            { name: 'Zamanlayıcı/Kontrol Ünitesi', description: 'Otomatik çalıştırma için' },
            { name: 'Vana Kutusu', description: 'Yer altı vanaları için koruma kutusu' }
        ],
        sources: [
            { name: 'USDA - Irrigation Systems for Blueberries', url: 'https://www.ars.usda.gov/news-events/news/research-news/2024/blueberry-research/' },
            { name: 'Extension Services - Sprinkler Irrigation', url: 'https://extension.oregonstate.edu/crop-production/berries/blueberry-production' }
        ]
    },
    micro_sprinkler: {
        name: 'Mikro Sprinkler Sulama',
        description: 'Damla ve sprinkler arası sistem. Küçük alanlar için ideal.',
        equipment: [
            { name: 'Ana Boru Hattı', description: '20-32 mm çap' },
            { name: 'Lateral Borular', description: '16 mm çap, mikro sprinkler başlıklarına bağlanır' },
            { name: 'Mikro Sprinkler Başlıkları', description: 'Saatte 20-60 litre, bitki başına 1-2 adet' },
            { name: 'Filtre Sistemi', description: 'Disk filtre veya elek filtre' },
            { name: 'Basınç Regülatörü', description: '1.5-2.5 bar basınç kontrolü' },
            { name: 'Kontrol Vanaları', description: 'Manuel veya otomatik kontrol' },
            { name: 'Fertigasyon Sistemi', description: 'Gübre enjeksiyon sistemi' },
            { name: 'Zamanlayıcı', description: 'Otomatik kontrol ünitesi' }
        ],
        sources: [
            { name: 'Michigan State University - Micro Irrigation', url: 'https://www.canr.msu.edu/blueberries/' },
            { name: 'Oregon State University - Irrigation Guide', url: 'https://extension.oregonstate.edu/crop-production/berries/blueberry-production' }
        ]
    },
    surface: {
        name: 'Yüzey Sulama',
        description: 'Geleneksel yöntem. Düşük maliyetli ancak su verimliliği düşük.',
        equipment: [
            { name: 'Ana Kanal veya Boru', description: 'Su kaynağından alana su taşır' },
            { name: 'Yan Kanallar', description: 'Su dağıtım kanalları' },
            { name: 'Kontrol Yapıları', description: 'Su seviyesi kontrol vanaları' },
            { name: 'Drenaj Sistemi', description: 'Fazla suyun tahliyesi için' }
        ],
        sources: [
            { name: 'Traditional Irrigation Methods', url: 'https://extension.oregonstate.edu/crop-production/berries/blueberry-production' }
        ]
    }
};

// Blueberry tür ve çeşit verileri
const blueberryTypes = {
    highbush: {
        name: 'Highbush (Yüksek Çalı)',
        description: 'En yaygın yetiştirilen tür. Yüksek verim ve kaliteli meyve üretir.',
        varieties: {
            bluecrop: {
                name: 'Bluecrop',
                waterNeed: '3-5 litre/gün',
                soilPH: '4.5-5.5',
                sunlight: '6-8 saat/gün',
                chillHours: '800-1000 saat',
                temperatureRange: '15-25°C (gelişim), -20°C\'ye kadar dayanıklı',
                harvestPeriod: 'Temmuz ortası - Ağustos sonu',
                description: 'Dünyada en çok yetiştirilen çeşitlerden biri. Orta-geç sezon çeşidi. Yüksek verimli, sert meyveli ve uzun raf ömrüne sahip.',
                warning: 'Toprak pH\'sının 5.5\'in üzerine çıkmamasına dikkat edin. Düzenli sulama gerektirir. Kış soğuklarına dayanıklıdır ancak ilkbahar donlarına karşı korunmalıdır.',
                recommendedFor: ['turkiye', 'usa', 'kanada']
            },
            duke: {
                name: 'Duke',
                waterNeed: '3-4 litre/gün',
                soilPH: '4.5-5.5',
                sunlight: '6-8 saat/gün',
                chillHours: '600-800 saat',
                temperatureRange: '15-25°C (gelişim), -25°C\'ye kadar dayanıklı',
                harvestPeriod: 'Haziran sonu - Temmuz ortası',
                description: 'Erken sezon çeşidi. Büyük, sert ve tatlı meyveler üretir. Ticari üretimde çok tercih edilir.',
                warning: 'Erken çiçeklenme nedeniyle ilkbahar donlarına karşı korunmalıdır. Düzenli budama yapılmalıdır.',
                recommendedFor: ['turkiye', 'usa']
            },
            chandler: {
                name: 'Chandler',
                waterNeed: '4-6 litre/gün',
                soilPH: '4.5-5.5',
                sunlight: '6-8 saat/gün',
                chillHours: '500-600 saat',
                temperatureRange: '18-28°C (gelişim), -15°C\'ye kadar dayanıklı',
                harvestPeriod: 'Temmuz - Eylül',
                description: 'Çok büyük meyveli, geç sezon çeşidi. Uzun hasat dönemi. Taze tüketim ve işleme için uygundur.',
                warning: 'Yüksek su ihtiyacı vardır. Sıcak iklimlerde daha iyi performans gösterir. Düzenli gübreleme gerektirir.',
                recommendedFor: ['turkiye', 'sili', 'peru']
            },
            legacy: {
                name: 'Legacy',
                waterNeed: '3-5 litre/gün',
                soilPH: '4.5-5.5',
                sunlight: '6-8 saat/gün',
                chillHours: '400-500 saat',
                temperatureRange: '18-26°C (gelişim), -12°C\'ye kadar dayanıklı',
                harvestPeriod: 'Temmuz - Ağustos',
                description: 'Orta sezon çeşidi. Mükemmel tat ve aroma. Taze tüketim için idealdir.',
                warning: 'Düşük soğuklama ihtiyacı nedeniyle ılıman iklimlerde iyi performans gösterir. Toprak drenajı çok önemlidir.',
                recommendedFor: ['turkiye', 'meksika']
            }
        }
    },
    rabbiteye: {
        name: 'Rabbiteye',
        description: 'Sıcak iklimlere uyumlu, düşük soğuklama ihtiyacı olan tür.',
        varieties: {
            climax: {
                name: 'Climax',
                waterNeed: '2-4 litre/gün',
                soilPH: '4.5-6.0',
                sunlight: '6-8 saat/gün',
                chillHours: '300-400 saat',
                temperatureRange: '20-30°C (gelişim), -10°C\'ye kadar dayanıklı',
                harvestPeriod: 'Haziran - Temmuz',
                description: 'Erken sezon rabbiteye çeşidi. Sıcak iklimlere çok uyumludur. Orta büyüklükte meyveler.',
                warning: 'Tozlaşma için başka rabbiteye çeşitleriyle birlikte dikilmelidir. Toprak pH\'sı daha esnek olabilir.',
                recommendedFor: ['meksika', 'sili', 'peru']
            },
            tifblue: {
                name: 'Tifblue',
                waterNeed: '2-4 litre/gün',
                soilPH: '4.5-6.0',
                sunlight: '6-8 saat/gün',
                chillHours: '400-500 saat',
                temperatureRange: '20-30°C (gelişim), -12°C\'ye kadar dayanıklı',
                harvestPeriod: 'Temmuz - Ağustos',
                description: 'Geç sezon rabbiteye çeşidi. Yüksek verimli ve dayanıklı. İşleme için uygundur.',
                warning: 'Tozlaşma için başka çeşitlerle birlikte dikilmelidir. Kuraklığa nispeten dayanıklıdır.',
                recommendedFor: ['meksika', 'sili']
            }
        }
    },
    lowbush: {
        name: 'Lowbush (Alçak Çalı)',
        description: 'Yabani türler. Düşük büyüme, küçük meyveler.',
        varieties: {
            wild: {
                name: 'Yabani Lowbush',
                waterNeed: '1-3 litre/gün',
                soilPH: '4.0-5.5',
                sunlight: '6-8 saat/gün',
                chillHours: '1000-1200 saat',
                temperatureRange: '10-20°C (gelişim), -30°C\'ye kadar dayanıklı',
                harvestPeriod: 'Temmuz - Ağustos',
                description: 'Soğuk iklimlere çok dayanıklı yabani tür. Küçük ama çok aromatik meyveler.',
                warning: 'Ticari üretim için uygun değildir. Çok soğuk iklimlerde yetişir. Özel toprak koşulları gerektirir.',
                recommendedFor: ['kanada']
            }
        }
    }
};

// Bölge bazlı önerilen çeşitler
const regionRecommendations = {
    turkiye: {
        bursa: 'bluecrop',
        yalova: 'duke',
        rize: 'bluecrop',
        bolu: 'duke'
    },
    usa: {
        michigan: 'bluecrop',
        oregon: 'chandler',
        washington: 'bluecrop'
    },
    kanada: {
        british_columbia: 'bluecrop',
        quebec: 'wild'
    },
    sili: {
        central_valley: 'chandler',
        araucania: 'climax'
    },
    peru: {
        la_libertad: 'chandler',
        ica: 'chandler'
    },
    meksika: {
        jalisco: 'climax',
        michoacan: 'legacy'
    }
};

// Blueberry üretim bölgeleri ve iklim verileri
const blueberryRegions = {
    usa: {
        name: 'Amerika Birleşik Devletleri',
        cities: {
            michigan: {
                name: 'Michigan',
                temperature: 8.5,
                rainfall: 850,
                humidity: 72,
                harvestPeriod: 'Temmuz-Ağustos',
                harvestDuration: 45,
                sources: [
                    { name: 'USDA - Blueberry Research', url: 'https://www.ars.usda.gov/news-events/news/research-news/2024/blueberry-research/' },
                    { name: 'Michigan State University - Blueberry Extension', url: 'https://www.canr.msu.edu/blueberries/' },
                    { name: 'World Weather Online - Michigan Climate Data', url: 'https://www.worldweatheronline.com/michigan-weather.aspx' }
                ]
            },
            oregon: {
                name: 'Oregon',
                temperature: 11.2,
                rainfall: 1200,
                humidity: 68,
                harvestPeriod: 'Temmuz-Eylül',
                harvestDuration: 60,
                sources: [
                    { name: 'Oregon State University - Blueberry Production', url: 'https://extension.oregonstate.edu/crop-production/berries/blueberry-production' },
                    { name: 'USDA - Blueberry Research', url: 'https://www.ars.usda.gov/news-events/news/research-news/2024/blueberry-research/' },
                    { name: 'NOAA - Climate Data for Agriculture', url: 'https://www.climate.gov/maps-data' }
                ]
            },
            washington: {
                name: 'Washington',
                temperature: 10.8,
                rainfall: 950,
                humidity: 70,
                harvestPeriod: 'Temmuz-Ağustos',
                harvestDuration: 50,
                sources: [
                    { name: 'Washington State University - Blueberry Research', url: 'https://extension.wsu.edu/small-fruits/blueberries/' },
                    { name: 'USDA - Climate Data for Blueberry', url: 'https://www.climate.gov/maps-data' },
                    { name: 'Pacific Northwest Blueberry Council', url: 'https://www.nwblueberrycouncil.org/' }
                ]
            }
        }
    },
    turkiye: {
        name: 'Türkiye',
        cities: {
            bursa: {
                name: 'Bursa',
                temperature: 14.5,
                rainfall: 700,
                humidity: 65,
                harvestPeriod: 'Haziran-Temmuz',
                harvestDuration: 40,
                sources: [
                    { name: 'TÜİK - Bitkisel Üretim İstatistikleri', url: 'https://data.tuik.gov.tr/Bulten/Index?p=Bitkisel-Uretim-Istatistikleri-2023-49674' },
                    { name: 'Bursa İl Tarım ve Orman Müdürlüğü', url: 'https://bursa.tarimorman.gov.tr/' },
                    { name: 'Uludağ Blueberry Derneği (ULUBERRYDER)', url: 'https://www.aa.com.tr/tr/insana-dair/tek-cati-altinda-toplanan-bursali-yaban-mersini-ureticileri-ihracat-hedefliyor/3619443' },
                    { name: 'Meteoroloji Genel Müdürlüğü - Tarım Meteorolojisi', url: 'https://www.mgm.gov.tr/arastirma/tarim-meteorolojisi.aspx' }
                ]
            },
            yalova: {
                name: 'Yalova',
                temperature: 14.8,
                rainfall: 750,
                humidity: 68,
                harvestPeriod: 'Haziran-Temmuz',
                harvestDuration: 42,
                sources: [
                    { name: 'Yalova İl Tarım ve Orman Müdürlüğü', url: 'https://yalova.tarimorman.gov.tr/' },
                    { name: 'Alova Farm - Blueberry Production Data', url: 'https://www.aa.com.tr/tr/ekonomi/turkiye-yaban-mersini-uretiminde-alova-farm-ile-dunya-pazarina-acilacak/3083319' },
                    { name: 'Meteoroloji Genel Müdürlüğü - Tarım Meteorolojisi', url: 'https://www.mgm.gov.tr/arastirma/tarim-meteorolojisi.aspx' }
                ]
            },
            rize: {
                name: 'Rize',
                temperature: 13.2,
                rainfall: 2200,
                humidity: 78,
                harvestPeriod: 'Temmuz-Ağustos',
                harvestDuration: 45,
                sources: [
                    { name: 'Rize İl Tarım ve Orman Müdürlüğü', url: 'https://rize.tarimorman.gov.tr/' },
                    { name: 'Meteoroloji Genel Müdürlüğü - Tarım Meteorolojisi', url: 'https://www.mgm.gov.tr/arastirma/tarim-meteorolojisi.aspx' },
                    { name: 'Karadeniz Tarımsal Araştırma Enstitüsü', url: 'https://www.tarimorman.gov.tr/TAGEM/Belgeler/yayin/Karadeniz%20Tarimsal%20Arastirma%20Enstitusu.pdf' }
                ]
            },
            bolu: {
                name: 'Bolu',
                temperature: 12.5,
                rainfall: 650,
                humidity: 70,
                harvestPeriod: 'Temmuz-Ağustos',
                harvestDuration: 40,
                sources: [
                    { name: 'Bolu İl Tarım ve Orman Müdürlüğü', url: 'https://bolu.tarimorman.gov.tr/' },
                    { name: 'Meteoroloji Genel Müdürlüğü - Tarım Meteorolojisi', url: 'https://www.mgm.gov.tr/arastirma/tarim-meteorolojisi.aspx' },
                    { name: 'Bolu Abant İzzet Baysal Üniversitesi Ziraat Fakültesi', url: 'https://ziraat.ibu.edu.tr/' }
                ]
            }
        }
    },
    kanada: {
        name: 'Kanada',
        cities: {
            british_columbia: {
                name: 'British Columbia',
                temperature: 9.5,
                rainfall: 1100,
                humidity: 75,
                harvestPeriod: 'Temmuz-Ağustos',
                harvestDuration: 50,
                sources: [
                    { name: 'Agriculture and Agri-Food Canada - Blueberry Production', url: 'https://agriculture.canada.ca/en/agricultural-production/horticulture/fruits/blueberries' },
                    { name: 'British Columbia Blueberry Council', url: 'https://www.bcblueberry.com/' },
                    { name: 'Environment and Climate Change Canada - Agricultural Climate Data', url: 'https://www.canada.ca/en/environment-climate-change/services/climate-change/canadian-centre-climate-services.html' }
                ]
            },
            quebec: {
                name: 'Quebec',
                temperature: 5.8,
                rainfall: 1000,
                humidity: 72,
                harvestPeriod: 'Temmuz-Ağustos',
                harvestDuration: 45,
                sources: [
                    { name: 'Agriculture and Agri-Food Canada - Blueberry Production', url: 'https://agriculture.canada.ca/en/agricultural-production/horticulture/fruits/blueberries' },
                    { name: 'Quebec Ministry of Agriculture - Blueberry', url: 'https://www.quebec.ca/en/agriculture-food/food-production/blueberries' },
                    { name: 'Environment and Climate Change Canada - Agricultural Climate Data', url: 'https://www.canada.ca/en/environment-climate-change/services/climate-change/canadian-centre-climate-services.html' }
                ]
            }
        }
    },
    sili: {
        name: 'Şili',
        cities: {
            central_valley: {
                name: 'Central Valley',
                temperature: 14.2,
                rainfall: 400,
                humidity: 60,
                harvestPeriod: 'Aralık-Mart',
                harvestDuration: 90,
                sources: [
                    { name: 'Chilean Blueberry Committee', url: 'https://www.chileanblueberry.com/' },
                    { name: 'Chilean Ministry of Agriculture', url: 'https://www.minagri.gob.cl/' },
                    { name: 'World Weather Online - Chile Climate Data', url: 'https://www.worldweatheronline.com/chile-weather.aspx' }
                ]
            },
            araucania: {
                name: 'Araucanía',
                temperature: 12.5,
                rainfall: 1200,
                humidity: 70,
                harvestPeriod: 'Ocak-Mart',
                harvestDuration: 75,
                sources: [
                    { name: 'Chilean Blueberry Committee', url: 'https://www.chileanblueberry.com/' },
                    { name: 'Chilean Ministry of Agriculture', url: 'https://www.minagri.gob.cl/' },
                    { name: 'Regional Agricultural Research Centers', url: 'https://www.inia.cl/' }
                ]
            }
        }
    },
    peru: {
        name: 'Peru',
        cities: {
            la_libertad: {
                name: 'La Libertad',
                temperature: 18.5,
                rainfall: 150,
                humidity: 65,
                harvestPeriod: 'Eylül-Mart',
                harvestDuration: 120,
                sources: [
                    { name: 'Peruvian Ministry of Agriculture', url: 'https://www.gob.pe/minagri' },
                    { name: 'Peru Blueberry Growers Association', url: 'https://www.proarandanos.pe/' },
                    { name: 'World Weather Online - Peru Climate Data', url: 'https://www.worldweatheronline.com/peru-weather.aspx' }
                ]
            },
            ica: {
                name: 'Ica',
                temperature: 20.2,
                rainfall: 50,
                humidity: 58,
                harvestPeriod: 'Eylül-Nisan',
                harvestDuration: 150,
                sources: [
                    { name: 'Peruvian Ministry of Agriculture', url: 'https://www.gob.pe/minagri' },
                    { name: 'Ica Regional Agricultural Office', url: 'https://www.gob.pe/minagri' },
                    { name: 'World Weather Online - Peru Climate Data', url: 'https://www.worldweatheronline.com/peru-weather.aspx' }
                ]
            }
        }
    },
    meksika: {
        name: 'Meksika',
        cities: {
            jalisco: {
                name: 'Jalisco',
                temperature: 20.5,
                rainfall: 800,
                humidity: 62,
                harvestPeriod: 'Nisan-Haziran',
                harvestDuration: 60,
                sources: [
                    { name: 'Mexican Ministry of Agriculture', url: 'https://www.gob.mx/agricultura' },
                    { name: 'Jalisco State Agricultural Department', url: 'https://www.jalisco.gob.mx/es/gobierno/secretarias/desarrollo-rural' },
                    { name: 'World Weather Online - Mexico Climate Data', url: 'https://www.worldweatheronline.com/mexico-weather.aspx' }
                ]
            },
            michoacan: {
                name: 'Michoacán',
                temperature: 19.8,
                rainfall: 900,
                humidity: 65,
                harvestPeriod: 'Nisan-Temmuz',
                harvestDuration: 70,
                sources: [
                    { name: 'Mexican Ministry of Agriculture', url: 'https://www.gob.mx/agricultura' },
                    { name: 'Michoacán State Agricultural Department', url: 'https://www.michoacan.gob.mx/sedru' },
                    { name: 'World Weather Online - Mexico Climate Data', url: 'https://www.worldweatheronline.com/mexico-weather.aspx' }
                ]
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultsSection = document.getElementById('results');
    const countrySelect = document.getElementById('country');
    const citySelect = document.getElementById('city');
    
    // Sayfa yüklendiğinde Girdi Bilgileri bölümüne odaklan
    const girdiBilgileriSection = document.getElementById('girdi-bilgileri');
    if (girdiBilgileriSection) {
        setTimeout(() => {
            girdiBilgileriSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
    
    // Ülke seçildiğinde şehir listesini güncelle
    countrySelect.addEventListener('change', function() {
        const countryCode = this.value;
        citySelect.innerHTML = '<option value="">Seçiniz...</option>';
        
        if (countryCode && countryCode !== 'diger' && blueberryRegions[countryCode]) {
            const cities = blueberryRegions[countryCode].cities;
            for (const [key, city] of Object.entries(cities)) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = city.name;
                citySelect.appendChild(option);
            }
        } else if (countryCode === 'diger') {
            citySelect.innerHTML = '<option value="">Manuel giriş yapın</option>';
        }
        
        // Şehir seçimini sıfırla
        clearClimateData();
    });
    
    // Şehir seçildiğinde iklim verilerini doldur
    citySelect.addEventListener('change', function() {
        const countryCode = countrySelect.value;
        const cityCode = this.value;
        
        if (countryCode && cityCode && countryCode !== 'diger' && blueberryRegions[countryCode]) {
            const cityData = blueberryRegions[countryCode].cities[cityCode];
            if (cityData) {
                fillClimateData(cityData);
                showSourceInfo(cityData.sources, blueberryRegions[countryCode].name, cityData.name);
            }
        } else {
            clearClimateData();
        }
    });
    
    // Blueberry tür ve çeşit seçimi
    const typeSelect = document.getElementById('blueberry-type');
    const varietySelect = document.getElementById('blueberry-variety');
    
    // Sayfa yüklendiğinde türleri doldur
    for (const [key, type] of Object.entries(blueberryTypes)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = type.name;
        typeSelect.appendChild(option);
    }
    
    // Tür seçildiğinde çeşitleri doldur
    typeSelect.addEventListener('change', function() {
        const typeCode = this.value;
        varietySelect.innerHTML = '<option value="">Seçiniz...</option>';
        
        if (typeCode && blueberryTypes[typeCode]) {
            const varieties = blueberryTypes[typeCode].varieties;
            for (const [key, variety] of Object.entries(varieties)) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = variety.name;
                varietySelect.appendChild(option);
            }
            
            // Önerilen çeşidi göster
            showRecommendedVariety();
        } else {
            document.getElementById('variety-params').style.display = 'none';
            document.getElementById('recommended-variety').style.display = 'none';
        }
    });
    
    // Çeşit seçildiğinde parametreleri göster
    varietySelect.addEventListener('change', function() {
        const typeCode = typeSelect.value;
        const varietyCode = this.value;
        
        if (typeCode && varietyCode && blueberryTypes[typeCode]) {
            const variety = blueberryTypes[typeCode].varieties[varietyCode];
            if (variety) {
                showVarietyParams(variety);
                // Su ihtiyacını güncelle
                const params = calculateProjectParams();
                if (params) {
                    calculateAnnualWaterNeed(params);
                }
            }
        } else {
            document.getElementById('variety-params').style.display = 'none';
        }
    });
    
    // Şehir seçildiğinde önerilen çeşidi güncelle
    citySelect.addEventListener('change', function() {
        showRecommendedVariety();
    });
    
    // Sulama sistemi seçimi
    const irrigationSelect = document.getElementById('irrigation-type');
    
    // Sayfa yüklendiğinde sulama sistemlerini doldur
    for (const [key, system] of Object.entries(irrigationSystems)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = system.name;
        irrigationSelect.appendChild(option);
    }
    
    // Sulama sistemi seçildiğinde ekipmanları göster
    irrigationSelect.addEventListener('change', function() {
        const systemCode = this.value;
        
        if (systemCode && irrigationSystems[systemCode]) {
            const system = irrigationSystems[systemCode];
            system.code = systemCode; // Sistem kodunu ekle
            showIrrigationEquipment(system);
        } else {
            document.getElementById('irrigation-equipment').style.display = 'none';
        }
    });
    
    // Proje parametreleri değiştiğinde ekipman miktarlarını güncelle
    const projectInputs = ['project-area', 'row-spacing', 'plant-spacing'];
    projectInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                // Eğer bir sulama sistemi seçiliyse, miktarları güncelle
                const selectedSystem = irrigationSelect.value;
                if (selectedSystem && irrigationSystems[selectedSystem]) {
                    const system = irrigationSystems[selectedSystem];
                    system.code = selectedSystem;
                    showIrrigationEquipment(system);
                }
                // Saksı/substrat bilgisini güncelle
                if (potSizeSelect && substrateSelect) {
                    updatePotSubstrateInfo();
                }
            });
        }
    });
    
    // Örtü tercihi seçimi
    const coverSelect = document.getElementById('cover-preference');
    
    coverSelect.addEventListener('change', function() {
        const coverPreference = this.value;
        
        if (coverPreference === 'yes') {
            showCoverImpact(true);
        } else if (coverPreference === 'no') {
            showCoverImpact(false);
        } else {
            document.getElementById('cover-impact').style.display = 'none';
        }
    });
    
    // Saksı ve substrat seçimi
    const potSizeSelect = document.getElementById('pot-size');
    const substrateSelect = document.getElementById('substrate-type');
    
    // Saksı veya substrat seçildiğinde adet ve substrat bileşenlerini güncelle
    function updatePotSubstrateInfo() {
        const params = calculateProjectParams();
        if (params && params.totalPlants > 0) {
            updatePotSeedlingCount(params);
            updateSubstrateComponents(params);
        } else {
            document.getElementById('total-pot-seedling-info').style.display = 'none';
            document.getElementById('substrate-components-need').style.display = 'none';
        }
    }
    
    // Toplam saksı ve fidan adedini güncelle
    function updatePotSeedlingCount(params) {
        const totalInfoDiv = document.getElementById('total-pot-seedling-info');
        const totalSeedlingSpan = document.getElementById('total-seedling-count');
        const totalPotSpan = document.getElementById('total-pot-count');
        
        if (!totalInfoDiv || !params || params.totalPlants <= 0) {
            if (totalInfoDiv) totalInfoDiv.style.display = 'none';
            return;
        }
        
        if (totalSeedlingSpan && totalPotSpan) {
            totalSeedlingSpan.textContent = `${params.totalPlants} adet`;
            totalPotSpan.textContent = `${params.totalPlants} adet`;
            totalInfoDiv.style.display = 'block';
        }
    }
    
    // Substrat bileşenlerini göster
    function updateSubstrateComponents(params) {
        const componentsDiv = document.getElementById('substrate-components-need');
        const componentsList = document.getElementById('substrate-components-list');
        
        if (!componentsDiv || !componentsList) return;
        
        const potSize = potSizeSelect ? potSizeSelect.value : null;
        const substrateType = substrateSelect ? substrateSelect.value : null;
        
        if (!params || !potSize || !substrateType || params.totalPlants <= 0) {
            componentsDiv.style.display = 'none';
            return;
        }
        
        // Substrat karışımları
        const substrateMixes = {
            '100-torf': {
                name: '%100 Beyaz Torf',
                components: [
                    { name: 'Beyaz Torf', percentage: 100 }
                ]
            },
            '50-50': {
                name: '%50 Beyaz Torf + %50 Kokopit',
                components: [
                    { name: 'Beyaz Torf', percentage: 50 },
                    { name: 'Kokopit', percentage: 50 }
                ]
            },
            '65-25-10': {
                name: '%65 Beyaz Torf + %25 Kokopit + %10 Perlit',
                components: [
                    { name: 'Beyaz Torf', percentage: 65 },
                    { name: 'Kokopit', percentage: 25 },
                    { name: 'Perlit', percentage: 10 }
                ]
            },
            '50-40-10': {
                name: '%50 Beyaz Torf + %40 Kokopit + %10 Perlit',
                components: [
                    { name: 'Beyaz Torf', percentage: 50 },
                    { name: 'Kokopit', percentage: 40 },
                    { name: 'Perlit', percentage: 10 }
                ]
            },
            '50-40-10-pomza': {
                name: '%50 Beyaz Torf + %40 Kokopit + %10 Pomza',
                components: [
                    { name: 'Beyaz Torf', percentage: 50 },
                    { name: 'Kokopit', percentage: 40 },
                    { name: 'Pomza', percentage: 10 }
                ]
            }
        };
        
        const substrate = substrateMixes[substrateType];
        if (!substrate) {
            componentsDiv.style.display = 'none';
            return;
        }
        
        // Her saksı için substrat miktarı (saksı hacminin %90'ı - drenaj için %10 boşluk)
        const potSizeL = parseFloat(potSize);
        const substratePerPot = potSizeL * 0.9; // litre
        const totalSubstrateNeeded = params.totalPlants * substratePerPot; // litre
        const totalSubstrateM3 = totalSubstrateNeeded / 1000; // m³
        
        // Bileşenleri listele
        let componentsHtml = '';
        substrate.components.forEach((component, index) => {
            const componentM3 = (totalSubstrateM3 * component.percentage) / 100;
            componentsHtml += `
                <div style="margin-bottom: ${index < substrate.components.length - 1 ? '8px' : '0'}; padding-bottom: ${index < substrate.components.length - 1 ? '8px' : '0'}; border-bottom: ${index < substrate.components.length - 1 ? '1px solid #e8eaed' : 'none'};">
                    <strong style="color: #202124;">${component.name}</strong> (%${component.percentage}): 
                    <span style="color: #1a73e8; font-weight: 600;">${componentM3.toFixed(3)} m³</span>
                </div>
            `;
        });
        
        componentsList.innerHTML = componentsHtml;
        componentsDiv.style.display = 'block';
    }
    
    if (potSizeSelect) {
        potSizeSelect.addEventListener('change', updatePotSubstrateInfo);
    }
    
    if (substrateSelect) {
        substrateSelect.addEventListener('change', updatePotSubstrateInfo);
    }
    
    // Proje parametreleri değiştiğinde hasat tahminlerini güncelle
    const projectInputsForHarvest = ['project-area', 'row-spacing', 'plant-spacing'];
    projectInputsForHarvest.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                updateHarvestEstimates();
            });
        }
    });
    
    calculateBtn.addEventListener('click', function() {
        calculateCosts();
    });

    // Enter tuşu ile de hesaplama yapılabilir
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateCosts();
            }
        });
    });

    // Navigasyon linklerine smooth scroll ekle
    const navLinks = document.querySelectorAll('.sites-nav-item, .sites-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                
                // Aktif linki güncelle
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

function calculateCosts() {
    // Form değerlerini al
    const area = parseFloat(document.getElementById('area').value) || 0;
    const plantingCost = parseFloat(document.getElementById('planting-cost').value) || 0;
    const annualCost = parseFloat(document.getElementById('annual-cost').value) || 0;
    const yield = parseFloat(document.getElementById('yield').value) || 0;
    const price = parseFloat(document.getElementById('price').value) || 0;
    const years = parseInt(document.getElementById('years').value) || 1;

    // Validasyon
    if (area <= 0 || years <= 0) {
        alert('Lütfen geçerli bir alan ve yıl sayısı girin!');
        return;
    }

    // Hesaplamalar
    const totalPlantingCost = plantingCost * area;
    const totalAnnualCost = annualCost * area * years;
    const totalInvestment = totalPlantingCost + totalAnnualCost;

    const totalYield = yield * area * years;
    const totalRevenue = totalYield * price;

    const netProfit = totalRevenue - totalInvestment;
    const profitMargin = totalRevenue > 0 ? ((netProfit / totalRevenue) * 100) : 0;
    const unitCost = totalYield > 0 ? (totalInvestment / totalYield) : 0;
    const annualProfit = netProfit / years;

    // Sonuçları göster
    displayResults({
        totalInvestment,
        totalRevenue,
        netProfit,
        profitMargin,
        unitCost,
        annualProfit
    });

    // Sonuçlar bölümünü göster
    document.getElementById('results').style.display = 'block';
    
    // Sonuçlara scroll yap
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function displayResults(results) {
    // Sayıları formatla
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    const formatPercent = (value) => {
        return value.toFixed(2) + '%';
    };

    // Sonuçları DOM'a yaz
    document.getElementById('total-investment').textContent = formatCurrency(results.totalInvestment);
    document.getElementById('total-revenue').textContent = formatCurrency(results.totalRevenue);
    
    const netProfitEl = document.getElementById('net-profit');
    netProfitEl.textContent = formatCurrency(results.netProfit);
    netProfitEl.closest('.sites-result-card').className = 'sites-result-card ' + (results.netProfit >= 0 ? 'positive' : 'negative');
    
    const profitMarginEl = document.getElementById('profit-margin');
    profitMarginEl.textContent = formatPercent(results.profitMargin);
    profitMarginEl.closest('.sites-result-card').className = 'sites-result-card ' + (results.profitMargin >= 0 ? 'positive' : 'negative');
    
    document.getElementById('unit-cost').textContent = formatCurrency(results.unitCost) + '/kg';
    
    const annualProfitEl = document.getElementById('annual-profit');
    annualProfitEl.textContent = formatCurrency(results.annualProfit);
    annualProfitEl.closest('.sites-result-card').className = 'sites-result-card ' + (results.annualProfit >= 0 ? 'positive' : 'negative');
}

// İklim verilerini doldur
function fillClimateData(cityData) {
    document.getElementById('avg-temperature').value = cityData.temperature;
    document.getElementById('annual-rainfall').value = cityData.rainfall;
    document.getElementById('humidity').value = cityData.humidity;
    document.getElementById('harvest-period').value = cityData.harvestPeriod;
    document.getElementById('harvest-duration').value = cityData.harvestDuration;
}

// İklim verilerini temizle
function clearClimateData() {
    document.getElementById('avg-temperature').value = '';
    document.getElementById('annual-rainfall').value = '';
    document.getElementById('humidity').value = '';
    document.getElementById('harvest-period').value = '';
    document.getElementById('harvest-duration').value = '';
    document.getElementById('source-info').style.display = 'none';
}

// Önerilen çeşidi göster
function showRecommendedVariety() {
    const countryCode = countrySelect.value;
    const cityCode = citySelect.value;
    const recommendedDiv = document.getElementById('recommended-variety');
    const recommendedText = document.getElementById('recommended-text');
    
    if (countryCode && cityCode && regionRecommendations[countryCode] && regionRecommendations[countryCode][cityCode]) {
        const recommendedVarietyCode = regionRecommendations[countryCode][cityCode];
        
        // Önerilen çeşidi bul
        let recommendedVariety = null;
        let recommendedType = null;
        
        for (const [typeKey, type] of Object.entries(blueberryTypes)) {
            if (type.varieties[recommendedVarietyCode]) {
                recommendedVariety = type.varieties[recommendedVarietyCode];
                recommendedType = type;
                break;
            }
        }
        
        if (recommendedVariety) {
            recommendedText.textContent = `${recommendedType.name} - ${recommendedVariety.name}`;
            recommendedDiv.style.display = 'block';
        } else {
            recommendedDiv.style.display = 'none';
        }
    } else {
        recommendedDiv.style.display = 'none';
    }
}

// Proje parametrelerini hesapla
function calculateProjectParams() {
    const projectArea = parseFloat(document.getElementById('project-area').value) || 0;
    const rowSpacing = parseFloat(document.getElementById('row-spacing').value) || 0;
    const plantSpacing = parseFloat(document.getElementById('plant-spacing').value) || 0;
    
    if (projectArea <= 0 || rowSpacing <= 0 || plantSpacing <= 0) {
        return null;
    }
    
    // Birimleri m'ye çevir
    const rowSpacingM = rowSpacing / 100; // cm'den m'ye
    const plantSpacingM = plantSpacing / 100; // cm'den m'ye
    
    // Alanın yaklaşık kenar uzunluğu (kare alan varsayımı)
    const sideLength = Math.sqrt(projectArea);
    
    // Sıra sayısını hesapla
    const numberOfRows = Math.floor(sideLength / rowSpacingM);
    
    // Her sıranın uzunluğu (alanın diğer kenarı)
    const rowLength = sideLength;
    
    // Her sıradaki bitki sayısı
    const plantsPerRow = Math.floor(rowLength / plantSpacingM);
    
    // Toplam bitki sayısı
    const totalPlants = numberOfRows * plantsPerRow;
    
    return {
        projectArea,
        rowSpacing: rowSpacingM,
        plantSpacing: plantSpacingM,
        numberOfRows: Math.max(1, numberOfRows), // En az 1 sıra
        rowLength: Math.max(1, rowLength),
        plantsPerRow: Math.max(1, plantsPerRow), // En az 1 bitki
        totalPlants: Math.max(1, totalPlants) // En az 1 bitki
    };
}

// Ekipman miktarını hesapla
function calculateEquipmentQuantity(itemName, systemCode, params) {
    if (!params) return null;
    
    const { numberOfRows, rowLength, totalPlants, projectArea } = params;
    
    // Damla sulama sistemi
    if (systemCode === 'drip') {
        if (itemName.includes('Ana Boru')) {
            // Ana boru uzunluğu: proje alanının kökü kadar (yaklaşık)
            const mainPipeLength = Math.sqrt(projectArea) * 1.5; // m cinsinden
            return `${Math.ceil(mainPipeLength)} metre`;
        }
        if (itemName.includes('Lateral Borular')) {
            // Her sıra için lateral boru
            return `${numberOfRows} adet (her biri yaklaşık ${Math.ceil(rowLength)} metre)`;
        }
        if (itemName.includes('Damlatıcılar')) {
            // Bitki başına 3 damlatıcı (ortalama)
            const totalDrippers = totalPlants * 3;
            return `${totalDrippers} adet (bitki başına 3 adet)`;
        }
        if (itemName.includes('Filtre')) {
            return '1 adet (sistem başına)';
        }
        if (itemName.includes('Basınç Regülatörü')) {
            // Her 500 m² için 1 adet
            const regulators = Math.ceil(projectArea / 500);
            return `${regulators} adet`;
        }
        if (itemName.includes('Kontrol Vanaları')) {
            // Her 200 m² için 1 vana
            const valves = Math.ceil(projectArea / 200);
            return `${valves} adet`;
        }
        if (itemName.includes('Fertigasyon')) {
            return '1 adet (sistem başına)';
        }
        if (itemName.includes('Pompa')) {
            // 1000 m²'den büyükse pompa gerekli
            return projectArea > 1000 ? '1 adet' : 'Gerekli değil (düşük basınç yeterli)';
        }
        if (itemName.includes('Zamanlayıcı')) {
            return '1 adet (sistem kontrolü için)';
        }
    }
    
    // Sprinkler sulama sistemi
    if (systemCode === 'sprinkler') {
        if (itemName.includes('Ana Boru')) {
            const mainPipeLength = Math.sqrt(projectArea) * 1.5;
            return `${Math.ceil(mainPipeLength)} metre`;
        }
        if (itemName.includes('Lateral Borular')) {
            return `${numberOfRows} adet (her biri yaklaşık ${Math.ceil(rowLength)} metre)`;
        }
        if (itemName.includes('Sprinkler Başlıkları')) {
            // Her 25 m² için 1 sprinkler
            const sprinklers = Math.ceil(projectArea / 25);
            return `${sprinklers} adet`;
        }
        if (itemName.includes('Filtre')) {
            return '1 adet';
        }
        if (itemName.includes('Basınç Pompası')) {
            return '1 adet (yüksek basınç için)';
        }
        if (itemName.includes('Kontrol Vanaları')) {
            const valves = Math.ceil(projectArea / 300);
            return `${valves} adet`;
        }
        if (itemName.includes('Zamanlayıcı')) {
            return '1 adet';
        }
        if (itemName.includes('Vana Kutusu')) {
            const boxes = Math.ceil(projectArea / 500);
            return `${boxes} adet`;
        }
    }
    
    // Mikro sprinkler sistemi
    if (systemCode === 'micro_sprinkler') {
        if (itemName.includes('Ana Boru')) {
            const mainPipeLength = Math.sqrt(projectArea) * 1.5;
            return `${Math.ceil(mainPipeLength)} metre`;
        }
        if (itemName.includes('Lateral Borular')) {
            return `${numberOfRows} adet (her biri yaklaşık ${Math.ceil(rowLength)} metre)`;
        }
        if (itemName.includes('Mikro Sprinkler')) {
            // Bitki başına 1 mikro sprinkler
            return `${totalPlants} adet (bitki başına 1 adet)`;
        }
        if (itemName.includes('Filtre')) {
            return '1 adet';
        }
        if (itemName.includes('Basınç Regülatörü')) {
            const regulators = Math.ceil(projectArea / 500);
            return `${regulators} adet`;
        }
        if (itemName.includes('Kontrol Vanaları')) {
            const valves = Math.ceil(projectArea / 250);
            return `${valves} adet`;
        }
        if (itemName.includes('Fertigasyon')) {
            return '1 adet';
        }
        if (itemName.includes('Zamanlayıcı')) {
            return '1 adet';
        }
    }
    
    // Yüzey sulama
    if (systemCode === 'surface') {
        if (itemName.includes('Ana Kanal')) {
            const canalLength = Math.sqrt(projectArea) * 1.5;
            return `${Math.ceil(canalLength)} metre`;
        }
        if (itemName.includes('Yan Kanallar')) {
            return `${numberOfRows} adet`;
        }
        if (itemName.includes('Kontrol Yapıları')) {
            const structures = Math.ceil(projectArea / 400);
            return `${structures} adet`;
        }
        if (itemName.includes('Drenaj')) {
            return '1 adet (alan için)';
        }
    }
    
    return null;
}

// Sulama sistemi ekipmanlarını göster
function showIrrigationEquipment(system) {
    const equipmentDiv = document.getElementById('irrigation-equipment');
    const equipmentList = document.getElementById('equipment-list');
    
    // Proje parametrelerini hesapla
    const params = calculateProjectParams();
    
    let html = `<div style="background-color: #e8f0fe; padding: 12px; border-radius: 4px; margin-bottom: 16px;">
        <p style="margin: 0; font-size: 13px; color: #202124; line-height: 1.6;"><strong>${system.name}</strong><br>${system.description}</p>
    </div>`;
    
    if (params) {
        html += `<div style="background-color: #f0f4f8; padding: 12px; border-radius: 4px; margin-bottom: 16px; font-size: 12px; color: #202124;">
            <strong>Proje Bilgileri:</strong><br>
            Proje Alanı: ${params.projectArea.toFixed(2)} m²<br>
            Toplam Bitki Sayısı: ${params.totalPlants} adet<br>
            Sıra Sayısı: ${params.numberOfRows} adet<br>
            Sıra Uzunluğu: ${Math.ceil(params.rowLength)} metre
        </div>`;
    } else {
        html += `<div style="background-color: #fce8e6; padding: 12px; border-radius: 4px; margin-bottom: 16px; font-size: 12px; color: #ea4335;">
            ⚠️ Miktar hesaplaması için lütfen "Temel Üretim Parametreleri" bölümündeki alanları doldurun (Proje Alanı, Sıra Aralığı, Bitki Aralığı).
        </div>`;
    }
    
    html += '<div class="equipment-items">';
    const systemCode = system.code || Object.keys(irrigationSystems).find(key => irrigationSystems[key] === system);
    
    // Yıllık su ihtiyacını hesapla ve göster
    calculateAnnualWaterNeed(params);
    
    system.equipment.forEach((item, index) => {
        const quantity = params ? calculateEquipmentQuantity(item.name, systemCode, params) : null;
        
        html += `
            <div class="equipment-item" style="display: flex; align-items: flex-start; padding: 12px; border-bottom: 1px solid #e8eaed;">
                <div style="min-width: 32px; height: 32px; background-color: #1a73e8; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; margin-right: 12px; flex-shrink: 0;">
                    ${index + 1}
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 500; color: #202124; margin-bottom: 4px; font-size: 14px;">${item.name}</div>
                    <div style="font-size: 13px; color: #5f6368; line-height: 1.5; margin-bottom: 4px;">${item.description}</div>
                    ${quantity ? `<div style="font-size: 12px; color: #1a73e8; font-weight: 500; margin-top: 4px; padding: 4px 8px; background-color: #e8f0fe; border-radius: 4px; display: inline-block;">📊 Gerekli Miktar: ${quantity}</div>` : ''}
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    // Kaynak bilgileri
    if (system.sources && system.sources.length > 0) {
        html += `<div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e8eaed;">
            <div style="font-size: 12px; font-weight: 500; color: #1a73e8; margin-bottom: 8px;">Kaynaklar:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 12px;">`;
        system.sources.forEach(source => {
            if (typeof source === 'object' && source.url) {
                html += `<li style="margin: 4px 0;"><a href="${source.url}" target="_blank" rel="noopener noreferrer" style="color: #1a73e8; text-decoration: none;">${source.name}</a> <span style="color: #5f6368;">↗</span></li>`;
            } else {
                html += `<li style="margin: 4px 0;">${source}</li>`;
            }
        });
        html += '</ul></div>';
    }
    
    equipmentList.innerHTML = html;
    equipmentDiv.style.display = 'block';
    equipmentDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Yıllık su ihtiyacını hesapla
function calculateAnnualWaterNeed(params) {
    const waterNeedDiv = document.getElementById('annual-water-need');
    const dailyWaterSpan = document.getElementById('daily-water');
    const monthlyWaterSpan = document.getElementById('monthly-water');
    const annualWaterSpan = document.getElementById('annual-water');
    
    if (!params || params.totalPlants <= 0) {
        waterNeedDiv.style.display = 'none';
        return;
    }
    
    // Seçili çeşidin günlük su ihtiyacını al
    const typeSelect = document.getElementById('blueberry-type');
    const varietySelect = document.getElementById('blueberry-variety');
    const typeCode = typeSelect ? typeSelect.value : null;
    const varietyCode = varietySelect ? varietySelect.value : null;
    
    let dailyWaterPerPlant = 3; // Varsayılan değer (litre/gün)
    
    if (typeCode && varietyCode && blueberryTypes[typeCode] && blueberryTypes[typeCode].varieties[varietyCode]) {
        const variety = blueberryTypes[typeCode].varieties[varietyCode];
        // Su ihtiyacını parse et (örn: "3-5 litre/gün" -> ortalaması 4)
        const waterMatch = variety.waterNeed.match(/(\d+)[-–](\d+)/);
        if (waterMatch) {
            const min = parseFloat(waterMatch[1]);
            const max = parseFloat(waterMatch[2]);
            dailyWaterPerPlant = (min + max) / 2; // Ortalama
        } else {
            const singleMatch = variety.waterNeed.match(/(\d+)/);
            if (singleMatch) {
                dailyWaterPerPlant = parseFloat(singleMatch[1]);
            }
        }
    }
    
    // Hesaplamalar
    const dailyWaterTotal = params.totalPlants * dailyWaterPerPlant; // litre/gün
    const monthlyWaterTotal = dailyWaterTotal * 30; // litre/ay
    const annualWaterTotal = dailyWaterTotal * 365; // litre/yıl
    
    // Birimleri dönüştür (m³ ve ton cinsinden de göster)
    const dailyWaterM3 = dailyWaterTotal / 1000;
    const monthlyWaterM3 = monthlyWaterTotal / 1000;
    const annualWaterM3 = annualWaterTotal / 1000;
    const annualWaterTon = annualWaterM3; // 1 m³ = 1 ton
    
    // Formatla ve göster
    dailyWaterSpan.textContent = `${dailyWaterTotal.toLocaleString('tr-TR')} litre/gün (${dailyWaterM3.toFixed(2)} m³/gün)`;
    monthlyWaterSpan.textContent = `${monthlyWaterTotal.toLocaleString('tr-TR')} litre/ay (${monthlyWaterM3.toFixed(2)} m³/ay)`;
    annualWaterSpan.textContent = `${annualWaterTotal.toLocaleString('tr-TR')} litre/yıl (${annualWaterM3.toFixed(2)} m³/yıl veya ${annualWaterTon.toFixed(2)} ton/yıl)`;
    
    waterNeedDiv.style.display = 'block';
}

// Örtü maliyetini hesapla
function calculateCoverCost(params) {
    const coverCostSection = document.getElementById('cover-cost-section');
    const componentsList = document.getElementById('cover-components-list');
    const totalCoverCostSpan = document.getElementById('total-cover-cost');
    
    if (!coverCostSection || !params || params.projectArea <= 0) {
        if (coverCostSection) coverCostSection.style.display = 'none';
        return 0;
    }
    
    const projectArea = params.projectArea; // m²
    const totalPlants = params.totalPlants;
    
    // Örtü sistemi bileşenleri ve birim fiyatları (2024 TL)
    const coverComponents = [
        {
            name: 'Sera Örtü Malzemesi (PE Plastik)',
            unit: 'm²',
            unitPrice: 8, // TL/m²
            quantity: projectArea * 1.1, // %10 ek alan (kenarlar için)
            description: 'UV dayanımlı, 200 mikron kalınlık'
        },
        {
            name: 'İskelet Yapı (Galvanizli Demir)',
            unit: 'm²',
            unitPrice: 45, // TL/m²
            quantity: projectArea,
            description: 'Tünel tipi sera iskeleti, 4m genişlik'
        },
        {
            name: 'Temel ve Sabitleme',
            unit: 'm',
            unitPrice: 25, // TL/m
            quantity: Math.sqrt(projectArea) * 4, // Çevre uzunluğu
            description: 'Beton temel ve ankraj çivileri'
        },
        {
            name: 'Havalandırma Sistemleri',
            unit: 'adet',
            unitPrice: 350, // TL/adet
            quantity: Math.ceil(projectArea / 200), // Her 200 m² için 1 adet
            description: 'Yan ve üst havalandırma pencereleri'
        },
        {
            name: 'Gölgeleme Ağı',
            unit: 'm²',
            unitPrice: 12, // TL/m²
            quantity: projectArea,
            description: '%50 gölgeleme oranı, yaz ayları için'
        },
        {
            name: 'Kapı ve Giriş Sistemleri',
            unit: 'adet',
            unitPrice: 1200, // TL/adet
            quantity: Math.ceil(projectArea / 500), // Her 500 m² için 1 kapı
            description: 'Çift kanatlı sera kapısı'
        },
        {
            name: 'Sabitleme Malzemeleri',
            unit: 'm²',
            unitPrice: 3, // TL/m²
            quantity: projectArea * 1.1,
            description: 'Rüzgar bantları, klipsler, vidalar'
        },
        {
            name: 'Kurulum İşçiliği',
            unit: 'm²',
            unitPrice: 15, // TL/m²
            quantity: projectArea,
            description: 'Profesyonel kurulum hizmeti'
        }
    ];
    
    // Bileşenleri listele ve toplam maliyeti hesapla
    let totalCost = 0;
    let componentsHtml = '<div style="display: grid; gap: 12px;">';
    
    coverComponents.forEach((component, index) => {
        const componentCost = component.quantity * component.unitPrice;
        totalCost += componentCost;
        
        componentsHtml += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background-color: #f8f9fa; border-radius: 4px; border-left: 3px solid #1a73e8;">
                <div style="flex: 1;">
                    <div style="font-weight: 500; color: #202124; margin-bottom: 4px;">${component.name}</div>
                    <div style="font-size: 12px; color: #5f6368;">${component.description}</div>
                    <div style="font-size: 12px; color: #5f6368; margin-top: 4px;">
                        Miktar: ${component.quantity.toFixed(2)} ${component.unit} × ${component.unitPrice.toFixed(2)} ₺/${component.unit}
                    </div>
                </div>
                <div style="font-weight: 600; color: #1a73e8; font-size: 14px; margin-left: 16px;">
                    ${componentCost.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺
                </div>
            </div>
        `;
    });
    
    componentsHtml += '</div>';
    
    // Toplam maliyeti formatla
    const formattedTotal = totalCost.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    // Temel proje maliyetlerini hesapla (örtü hariç)
    const baseProjectCost = calculateBaseProjectCost(params);
    
    // Örtü ile toplam maliyet
    const totalCostWithCover = baseProjectCost + totalCost;
    
    // Maliyet artışını hesapla
    const costIncreaseTL = totalCost;
    const costIncreasePercent = baseProjectCost > 0 ? ((totalCost / baseProjectCost) * 100) : 0;
    
    // DOM'a yaz
    if (componentsList) {
        componentsList.innerHTML = componentsHtml;
    }
    if (totalCoverCostSpan) {
        totalCoverCostSpan.textContent = `${formattedTotal} ₺`;
    }
    
    // Maliyet artışı bilgilerini göster
    const costWithoutCoverEl = document.getElementById('cost-without-cover');
    const costWithCoverEl = document.getElementById('cost-with-cover');
    const costIncreaseTLEl = document.getElementById('cost-increase-tl');
    const costIncreasePercentEl = document.getElementById('cost-increase-percent');
    const costIncreaseInfo = document.getElementById('cost-increase-info');
    
    if (costWithoutCoverEl && costWithCoverEl && costIncreaseTLEl && costIncreasePercentEl) {
        const formatCurrency = (value) => {
            return new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(value);
        };
        
        costWithoutCoverEl.textContent = formatCurrency(baseProjectCost);
        costWithCoverEl.textContent = formatCurrency(totalCostWithCover);
        costIncreaseTLEl.textContent = `+${formatCurrency(costIncreaseTL)}`;
        costIncreasePercentEl.textContent = `+${costIncreasePercent.toFixed(1)}%`;
        
        if (costIncreaseInfo) {
            costIncreaseInfo.style.display = 'block';
        }
    }
    
    coverCostSection.style.display = 'block';
    
    return totalCost;
}

// Tahmini yıllık hasat miktarlarını hesapla ve göster
function updateHarvestEstimates() {
    const params = calculateProjectParams();
    const harvestDiv = document.getElementById('harvest-estimates');
    const tableBody = document.getElementById('harvest-table-body');
    
    if (!harvestDiv || !tableBody) return;
    
    if (!params || params.totalPlants <= 0) {
        harvestDiv.style.display = 'none';
        return;
    }
    
    const totalPlants = params.totalPlants;
    
    // Yıllık bitki başına verim tahminleri (kg/bitki) - saksıda yetiştiricilik için
    const yieldPerPlant = {
        1: 0.2,   // 1. yıl: Çok az hasat (bitki gelişim aşamasında)
        2: 0.8,   // 2. yıl: Az miktarda hasat
        3: 1.5,   // 3. yıl: Artan verim
        4: 2.5,   // 4. yıl: Tam verim dönemi başlangıcı
        5: 3.0,   // 5. yıl: Tam verim
        6: 3.2,   // 6. yıl: Tam verim (maksimum)
        7: 3.0    // 7. yıl: Tam verim (hafif düşüş olabilir)
    };
    
    // Tabloyu oluştur
    let tableHtml = '';
    for (let year = 1; year <= 7; year++) {
        const yieldPerPlantKg = yieldPerPlant[year];
        const totalHarvestKg = totalPlants * yieldPerPlantKg;
        
        // Yıl bazlı stil (ilk yıllar düşük, sonraki yıllar yüksek verim)
        const rowStyle = year <= 2 ? 'background-color: #fff3cd;' : year <= 3 ? 'background-color: #d1ecf1;' : 'background-color: #d4edda;';
        
        tableHtml += `
            <tr style="${rowStyle}">
                <td style="padding: 12px; border-right: 1px solid #e8eaed; border-bottom: 1px solid #e8eaed; font-weight: 500; color: #202124;">
                    ${year}. Yıl
                </td>
                <td style="padding: 12px; text-align: right; border-right: 1px solid #e8eaed; border-bottom: 1px solid #e8eaed; color: #5f6368;">
                    ${yieldPerPlantKg.toFixed(1)} kg
                </td>
                <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e8eaed; color: #1a73e8; font-weight: 600;">
                    ${totalHarvestKg.toLocaleString('tr-TR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} kg
                </td>
            </tr>
        `;
    }
    
    tableBody.innerHTML = tableHtml;
    harvestDiv.style.display = 'block';
    harvestDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Toplam saksı ve fidan adedini güncelle (maliyet hesaplaması yok)
function updatePotSeedlingCount(params) {
    const totalInfoDiv = document.getElementById('total-pot-seedling-info');
    const totalSeedlingSpan = document.getElementById('total-seedling-count');
    const totalPotSpan = document.getElementById('total-pot-count');
    const cocopeatInfoDiv = document.getElementById('cocopeat-info');
    const cocopeatNeedSpan = document.getElementById('total-cocopeat-need');
    
    if (!totalInfoDiv || !params || params.totalPlants <= 0) {
        if (totalInfoDiv) totalInfoDiv.style.display = 'none';
        return;
    }
    
    // Saksı boyutu ve substrat tipini al
    const potSizeSelect = document.getElementById('pot-size');
    const substrateSelect = document.getElementById('substrate-type');
    
    const potSize = potSizeSelect ? potSizeSelect.value : null;
    const substrateType = substrateSelect ? substrateSelect.value : null;
    
    if (totalSeedlingSpan && totalPotSpan) {
        totalSeedlingSpan.textContent = `${params.totalPlants} adet`;
        totalPotSpan.textContent = `${params.totalPlants} adet`;
        totalInfoDiv.style.display = 'block';
    }
    
    // Cocopeat ihtiyacını hesapla ve göster
    if (potSize && substrateType && cocopeatInfoDiv && cocopeatNeedSpan) {
        const cocopeatAmount = calculateCocopeatNeed(potSize, substrateType, params);
        if (cocopeatAmount > 0) {
            const cocopeatM3 = cocopeatAmount / 1000; // Litre'den m³'ye çevir (1 m³ = 1000 L)
            cocopeatNeedSpan.textContent = `${cocopeatM3.toFixed(2)} m³`;
            cocopeatInfoDiv.style.display = 'block';
        } else {
            cocopeatInfoDiv.style.display = 'none';
        }
    } else {
        if (cocopeatInfoDiv) cocopeatInfoDiv.style.display = 'none';
    }
}

// Cocopeat (kokopit) ihtiyacını hesapla
function calculateCocopeatNeed(potSize, substrateType, params) {
    if (!params || !potSize || !substrateType) return 0;
    
    const potSizeL = parseFloat(potSize);
    const totalPlants = params.totalPlants;
    
    // Substrat karışımlarındaki kokopit yüzdeleri
    const cocopeatPercentages = {
        '100-torf': 0,           // %100 Torf - kokopit yok
        '50-50': 50,              // %50 Kokopit
        '65-25-10': 25,           // %25 Kokopit
        '50-40-10': 40,           // %40 Kokopit
        '50-40-10-pomza': 40      // %40 Kokopit
    };
    
    const cocopeatPercentage = cocopeatPercentages[substrateType] || 0;
    
    if (cocopeatPercentage === 0) return 0;
    
    // Her saksı için substrat miktarı (saksı hacminin %90'ı - drenaj için %10 boşluk)
    const substratePerPot = potSizeL * 0.9; // litre
    const totalSubstrateNeeded = totalPlants * substratePerPot; // litre
    
    // Toplam kokopit ihtiyacı (litre)
    const totalCocopeatNeeded = (totalSubstrateNeeded * cocopeatPercentage) / 100;
    
    return totalCocopeatNeeded;
}

// Temel proje maliyetini hesapla (örtü ve saksı/substrat hariç)
function calculateBaseProjectCost(params) {
    if (!params || params.projectArea <= 0) return 0;
    
    const projectArea = params.projectArea; // m²
    const totalPlants = params.totalPlants;
    
    // Saksıda yetiştiricilik için temel maliyetler (2024 TL fiyatları)
    const costs = {
        // Fidan maliyeti (bitki başına ortalama 25 TL)
        seedlingCost: totalPlants * 25,
        
        // Saksı yerleştirme ve düzenleme (bitki başına 10 TL - raf, platform vb.)
        potPlacement: totalPlants * 10,
        
        // Sulama sistemi (saksı bazlı - bitki başına 15 TL)
        irrigationSystem: totalPlants * 15,
        
        // Gübre ve besin çözeltisi (bitki başına ilk yıl 20 TL)
        fertilizer: totalPlants * 20,
        
        // İlk yıl bakım maliyeti (bitki başına 30 TL)
        firstYearMaintenance: totalPlants * 30,
        
        // Saksı taşıma ve yerleştirme işçiliği (bitki başına 5 TL)
        labor: totalPlants * 5
    };
    
    // Toplam temel maliyet
    const totalBaseCost = Object.values(costs).reduce((sum, cost) => sum + cost, 0);
    
    return totalBaseCost;
}

// Örtü kullanımının verime etkisini göster
function showCoverImpact(useCover) {
    const coverImpactDiv = document.getElementById('cover-impact');
    
    if (!coverImpactDiv) return;
    
    // Proje parametrelerini al
    const params = calculateProjectParams();
    
    // Örtü maliyetini hesapla ve göster
    if (useCover && params) {
        calculateCoverCost(params);
    } else {
        document.getElementById('cover-cost-section').style.display = 'none';
        // Maliyet artışı bilgisini gizle
        const costIncreaseInfo = document.getElementById('cost-increase-info');
        if (costIncreaseInfo) {
            costIncreaseInfo.style.display = 'none';
        }
    }
    
    // Varsayılan verim değerleri (kg/dekar)
    const baseYield = 500; // Örtü kullanılmadan ortalama verim
    const yieldIncrease = useCover ? 0.35 : 0; // %35 artış (örtü kullanıldığında)
    const yieldWithCover = baseYield * (1 + yieldIncrease);
    
    // Verim hesaplaması
    document.getElementById('yield-without-cover').textContent = `${baseYield} kg/dekar`;
    document.getElementById('yield-with-cover').textContent = useCover ? `${Math.round(yieldWithCover)} kg/dekar` : `${baseYield} kg/dekar`;
    document.getElementById('yield-impact').textContent = useCover ? `+%35 artış (+${Math.round(yieldWithCover - baseYield)} kg)` : 'Değişiklik yok';
    
    // Hasat dönemi
    document.getElementById('harvest-without-cover').textContent = 'Haziran-Temmuz';
    document.getElementById('harvest-with-cover').textContent = useCover ? 'Mayıs-Haziran (2-4 hafta erken)' : 'Haziran-Temmuz';
    document.getElementById('harvest-impact').textContent = useCover ? '2-4 hafta erken hasat' : 'Değişiklik yok';
    
    // Meyve kalitesi
    document.getElementById('quality-without-cover').textContent = 'İyi';
    document.getElementById('quality-with-cover').textContent = useCover ? 'Çok İyi (daha iri, daha tatlı)' : 'İyi';
    document.getElementById('quality-impact').textContent = useCover ? '%20-30 kalite artışı' : 'Değişiklik yok';
    
    // Su tüketimi
    document.getElementById('water-without-cover').textContent = '100%';
    document.getElementById('water-with-cover').textContent = useCover ? '%70-80 (buharlaşma azalır)' : '100%';
    document.getElementById('water-impact').textContent = useCover ? '%20-30 su tasarrufu' : 'Değişiklik yok';
    
    // Hastalık riski
    document.getElementById('disease-without-cover').textContent = 'Orta';
    document.getElementById('disease-with-cover').textContent = useCover ? 'Düşük (koruma sağlar)' : 'Orta';
    document.getElementById('disease-impact').textContent = useCover ? '%40-50 risk azalması' : 'Değişiklik yok';
    
    // Avantajlar
    const advantagesList = document.getElementById('cover-advantages');
    if (useCover) {
        advantagesList.innerHTML = `
            <li>Verimde %30-40 artış sağlar</li>
            <li>Hasat dönemi 2-4 hafta erkene çeker</li>
            <li>Meyve kalitesi ve büyüklüğü artar</li>
            <li>Su tüketiminde %20-30 tasarruf sağlar</li>
            <li>Hastalık ve zararlılara karşı koruma sağlar</li>
            <li>Don riskine karşı koruma sağlar</li>
            <li>Yabani ot kontrolü kolaylaşır</li>
            <li>Toprak nemi daha iyi korunur</li>
        `;
    } else {
        advantagesList.innerHTML = `
            <li>Daha düşük kurulum maliyeti</li>
            <li>Doğal iklim koşullarından yararlanma</li>
            <li>Daha az bakım gerektirir</li>
        `;
    }
    
    // Uyarılar
    const warningsList = document.getElementById('cover-warnings');
    if (useCover) {
        warningsList.innerHTML = `
            <li>Örtü kurulumu için ek maliyet gereklidir</li>
            <li>Düzenli havalandırma yapılmalıdır</li>
            <li>Örtü bakımı ve temizliği gereklidir</li>
            <li>Yüksek sıcaklıklarda gölgeleme gerekebilir</li>
            <li>Tozlaşma için arı girişi sağlanmalıdır</li>
        `;
    } else {
        warningsList.innerHTML = `
            <li>Don riskine karşı dikkatli olunmalıdır</li>
            <li>Hastalık ve zararlı kontrolü daha önemlidir</li>
            <li>Su tüketimi daha yüksek olabilir</li>
            <li>Hasat dönemi daha geç olabilir</li>
        `;
    }
    
    coverImpactDiv.style.display = 'block';
    coverImpactDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Proje parametreleri değiştiğinde örtü maliyetini güncelle
    if (useCover) {
        const projectInputs = ['project-area', 'row-spacing', 'plant-spacing'];
        projectInputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                // Zaten event listener var, sadece örtü maliyetini güncelle
                const existingListener = input._coverUpdateListener;
                if (!existingListener) {
                    input._coverUpdateListener = true;
                    input.addEventListener('input', function() {
                        const coverSelect = document.getElementById('cover-preference');
                        if (coverSelect && coverSelect.value === 'yes') {
                            const newParams = calculateProjectParams();
                            if (newParams) {
                                calculateCoverCost(newParams);
                            }
                        }
                    });
                }
            }
        });
    }
}

// Çeşit parametrelerini göster
function showVarietyParams(variety) {
    document.getElementById('param-water').textContent = variety.waterNeed;
    document.getElementById('param-ph').textContent = variety.soilPH;
    document.getElementById('param-sunlight').textContent = variety.sunlight;
    document.getElementById('param-chill').textContent = variety.chillHours;
    document.getElementById('param-temperature').textContent = variety.temperatureRange;
    document.getElementById('param-harvest').textContent = variety.harvestPeriod;
    document.getElementById('variety-description').textContent = variety.description;
    document.getElementById('variety-warning').textContent = variety.warning;
    
    document.getElementById('variety-params').style.display = 'block';
    document.getElementById('variety-params').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Kaynak bilgilerini göster
function showSourceInfo(sources, countryName, cityName) {
    const sourceInfo = document.getElementById('source-info');
    const sourceContent = document.getElementById('source-content');
    
    let html = `<strong>${countryName} - ${cityName}</strong> için önerilen veriler aşağıdaki kaynaklardan alınmıştır:<br><br>`;
    html += '<ul style="margin: 8px 0; padding-left: 20px;">';
    sources.forEach(source => {
        if (typeof source === 'object' && source.url) {
            html += `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer" style="color: #1a73e8; text-decoration: none;">${source.name}</a> <span style="color: #5f6368;">↗</span></li>`;
        } else {
            // Geriye dönük uyumluluk için
            html += `<li>${source}</li>`;
        }
    });
    html += '</ul>';
    
    sourceContent.innerHTML = html;
    sourceInfo.style.display = 'block';
}

