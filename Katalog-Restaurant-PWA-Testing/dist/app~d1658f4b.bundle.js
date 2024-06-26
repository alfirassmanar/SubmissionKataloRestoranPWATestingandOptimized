(()=>{"use strict";var n,A={245:(n,A,e)=>{e.d(A,{A:()=>a});var t=e(354),o=e.n(t),i=e(314),r=e.n(i)()(o());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@400;500;600&display=swap);"]),r.push([n.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Inter';\n}\n\n:root {\n  --primary-color: black;\n  --secondary-color: #576cbc;\n  --third-color: #fff;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\nbutton,\na {\n  box-sizing: border-box;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.skip2content {\n  background-color: var(--secondary-color);\n  border-radius: 4px;\n  color: var(--third-color);\n  font-weight: 500;\n  left: 0;\n  line-height: 44px;\n  margin: 0 auto;\n  padding: 0 10px;\n  position: absolute;\n  right: 0;\n  top: -50px;\n  transition: 0.35s;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  z-index: 1500;\n}\n\n.skip2content:focus {\n  top: 30px;\n}\n\nheader {\n  top: 0;\n  position: sticky;\n  z-index: 100;\n}\n\n/* nav */\nnav {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.nav-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.brand a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  color: var(--secondary-color);\n}\n\n.nav__menu {\n  width: max-content;\n  height: 100%;\n}\n\n.nav__menu ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 60px;\n  list-style: none;\n}\n\n.nav__menu ul li {\n  padding: 0;\n}\n\n.nav__menu a {\n  text-decoration: none;\n  font-size: 16px;\n  padding: 0.9rem;\n}\n\n.nav__menu ul li:hover {\n  color: var(--secondary-color);\n  text-decoration: underline;\n}\n\n/* hero */\n\n.hero-container {\n  min-height: 380px;\n  position: relative;\n  background-image: url(\"/images/sharp/hero-image_1-large.jpg\");\n  background-color: #f0f0f0;\n  width: 100%;\n  height: 400px;\n}\n\n.hero-slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.hero-caption {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: #fff;\n}\n\n.hero-caption h1 {\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n}\n\n.hero-caption p {\n  font-size: 1.2rem;\n  font-style: italic;\n}\n\n/* Content */\nsection {\n  margin-top: 40px;\n}\n\na,\np,\nh1,\nh2,\nh3,\nh4 {\n  text-decoration: none;\n}\n\n/* Restro Main Home CSS */\n.main-resto_container {\n  margin: 60px auto;\n}\n\n.main-resto_label {\n  margin: auto;\n  width: max-content;\n  font-size: 22px;\n}\n\n.main-resto_label hr {\n  margin-top: 0;\n  width: 50%;\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n.list-resto {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Mengubah lebar minimum kolom */\n  gap: 20px;\n  padding: 20px;\n  margin: 0 auto; \n}\n\n.resto-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 15px;\n  overflow: hidden;\n  position: relative;\n  top: 0;\n  transition: top ease 0.4s;\n  cursor: pointer;\n}\n\n.resto-item:hover {\n  top: -4px;\n}\n\n.resto-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.resto-item_image {\n  object-fit: cover;\n  width: 100%;\n  height: 250px;\n  margin-bottom: 15px;\n}\n\n.resto-item_city {\n  position: absolute;\n  top: 20px; \n  left: 20px; \n  background-color: #FF6347; /* Mengubah warna latar belakang kota restoran */\n  color: white;\n  padding: 5px 10px;\n  border-radius: 4px;\n  font-size: 1rem;\n  min-width: 44px; \n  min-height: 44px; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.resto-item_rating {\n  color: #DAA520  ;\n  font-size: 12pt;\n  font-weight: 400;\n  text-decoration: none;\n  margin: 0 0 0 5px;\n  padding: 2px 3px 2px 3px;\n  border-radius: 5px;\n  margin-left: -5px;\n}\n\n.resto-item_name {\n  font-weight: bold;\n  font-size: 24px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n  padding: 0 16px 0 16px;\n  text-align: left; /* Posisi teks menjadi kiri */\n}\n\n.resto-item_name:hover {\n  opacity: 0.7;\n}\n\n.resto-item_name {\n  font-size: 1.4rem;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  color: #333;\n  margin: 10px 0;\n}\n\n.resto-item_desc {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 16px 15px;\n  font-size: 14px;\n  line-height: 1.5em;\n  color: black;\n}\n\n/* Footer */\nfooter {\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  padding: 20px 0;\n}\n.footer-text {\n  margin: 0;\n}\n\n#root {\n  padding-top: 65px;\n}\n\n/* Detail */\n\n.resto-item {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  margin: 20px 0;\n  transition: transform 0.3s;\n}\n\n.resto-item:hover {\n  transform: scale(1.05);\n}\n\n.resto-item a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.resto-item_image {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-bottom: 1px solid #ddd;\n}\n\n.resto-item_content {\n  padding: 15px;\n  text-align: center;\n}\n\n.resto-item_city {\n  font-size: 10pt;\n  font-weight: bold;\n  color: #fff;\n}\n\n.resto-item_name {\n  font-size: 1.2em;\n  margin: 10px 0;\n  color: #333;\n}\n\n.resto-item_rating {\n  color: #ffa500;\n}\n\n.resto-item_desc {\n  font-size: 0.9em;\n  color: #666;\n  margin-top: 10px;\n  text-align: justify;\n}\n\n.detail {\n  padding: 20px;\n}\n\n.container-info {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.img-container {\n  flex: 1 1 300px;\n  text-align: center;\n}\n\n.resto-item_image-container {\n  width: 100%;\n  height: auto;\n  max-height: 400px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.detail-info {\n  flex: 1 1 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.resto-name, .resto-rating {\n  font-size: 1.1em;\n  color: #333;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.resto-address {\n  margin-left: 10px;\n  font-size: 10pt;\n  color: #333;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.detail-name-address-rating {\n  margin: 0;\n}\n\n.detail-desc {\n  font-size: 1em;\n  line-height: 1.5em;\n  color: #555;\n  margin-top: 1px;\n  margin-left: 10px;\n}\n\n.resto-category {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-left: 10px;\n}\n\n.category {\n  background-color: #6699CC; /* Warna dengan transparansi */\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 0.9em;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Efek bayangan */\n  transition: background-color 0.3s ease; /* Transisi perubahan warna latar belakang */\n}\n\n/* Efek hover */\n.category:hover {\n  background-color: rgba(255, 99, 71, 0.9); /* Warna latar belakang yang lebih gelap saat hover */\n}\n\n.restaurant-detail__menu-list {\n  margin-top: 20px;\n}\n\n.menu-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.menu-table th, .menu-table td {\n  border: 1px solid #fff;\n  padding: 8px;\n  text-align: left;\n}\n\n.menu-table th {\n  background-color: #557799;\n  color: white;\n}\n\n.menu-table tr:nth-child(even) {\n  background-color: #f2f2f2; /* Warna latar belakang baris genap */\n}\n\n.menu-table td ul {\n  list-style-type: none; /* Menghilangkan bullet points */\n  padding-left: 0;\n  margin: 0;\n}\n\n.menu-table td ul li {\n  margin: 5px 0;\n}\n\n.detail-review {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.detail-review-item {\n  background-color: #f4f4f4;\n  border-radius: 10px;\n  padding: 15px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.header-review {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n\n.name-review {\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\n.date-review {\n  font-size: 0.9em;\n  color: #888;\n}\n\n.body-review {\n  font-size: 1em;\n  color: #555;\n  text-align: justify;\n}\n\n.like {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\nform {\n  margin: 2em 0;\n  padding: 1.5em;\n  border: 2px solid #6699CC;\n  border-radius: 10px;\n  background-color: #fefefe;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 50px;\n  padding: 0.5em;\n  font-size: 1em;\n  color: #333;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  margin-bottom: 1em;\n}\n\n.form-label {\n  font-size: 1.1em;\n  color: #333;\n  margin-bottom: 0.5em;\n}\n\n.btn {\n  display: block;\n  width: 100px;\n  height: 40px;\n  font-size: 1em;\n  color: white;\n  background-color: #6699CC;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  text-align: center;\n  line-height: 40px;\n  transition: background-color 0.3s;\n}\n\n.btn:hover {\n  background-color: #e5533d;\n}\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@400;500;600&display=swap');\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Inter';\n}\n\n:root {\n  --primary-color: black;\n  --secondary-color: #576cbc;\n  --third-color: #fff;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\nbutton,\na {\n  box-sizing: border-box;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.skip2content {\n  background-color: var(--secondary-color);\n  border-radius: 4px;\n  color: var(--third-color);\n  font-weight: 500;\n  left: 0;\n  line-height: 44px;\n  margin: 0 auto;\n  padding: 0 10px;\n  position: absolute;\n  right: 0;\n  top: -50px;\n  transition: 0.35s;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  z-index: 1500;\n}\n\n.skip2content:focus {\n  top: 30px;\n}\n\nheader {\n  top: 0;\n  position: sticky;\n  z-index: 100;\n}\n\n/* nav */\nnav {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.nav-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.brand a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  color: var(--secondary-color);\n}\n\n.nav__menu {\n  width: max-content;\n  height: 100%;\n}\n\n.nav__menu ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 60px;\n  list-style: none;\n}\n\n.nav__menu ul li {\n  padding: 0;\n}\n\n.nav__menu a {\n  text-decoration: none;\n  font-size: 16px;\n  padding: 0.9rem;\n}\n\n.nav__menu ul li:hover {\n  color: var(--secondary-color);\n  text-decoration: underline;\n}\n\n/* hero */\n\n.hero-container {\n  min-height: 380px;\n  position: relative;\n  background-image: url(\"/images/sharp/hero-image_1-large.jpg\");\n  background-color: #f0f0f0;\n  width: 100%;\n  height: 400px;\n}\n\n.hero-slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.hero-caption {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: #fff;\n}\n\n.hero-caption h1 {\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n}\n\n.hero-caption p {\n  font-size: 1.2rem;\n  font-style: italic;\n}\n\n/* Content */\nsection {\n  margin-top: 40px;\n}\n\na,\np,\nh1,\nh2,\nh3,\nh4 {\n  text-decoration: none;\n}\n\n/* Restro Main Home CSS */\n.main-resto_container {\n  margin: 60px auto;\n}\n\n.main-resto_label {\n  margin: auto;\n  width: max-content;\n  font-size: 22px;\n}\n\n.main-resto_label hr {\n  margin-top: 0;\n  width: 50%;\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n.list-resto {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Mengubah lebar minimum kolom */\n  gap: 20px;\n  padding: 20px;\n  margin: 0 auto; \n}\n\n.resto-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 15px;\n  overflow: hidden;\n  position: relative;\n  top: 0;\n  transition: top ease 0.4s;\n  cursor: pointer;\n}\n\n.resto-item:hover {\n  top: -4px;\n}\n\n.resto-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.resto-item_image {\n  object-fit: cover;\n  width: 100%;\n  height: 250px;\n  margin-bottom: 15px;\n}\n\n.resto-item_city {\n  position: absolute;\n  top: 20px; \n  left: 20px; \n  background-color: #FF6347; /* Mengubah warna latar belakang kota restoran */\n  color: white;\n  padding: 5px 10px;\n  border-radius: 4px;\n  font-size: 1rem;\n  min-width: 44px; \n  min-height: 44px; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.resto-item_rating {\n  color: #DAA520  ;\n  font-size: 12pt;\n  font-weight: 400;\n  text-decoration: none;\n  margin: 0 0 0 5px;\n  padding: 2px 3px 2px 3px;\n  border-radius: 5px;\n  margin-left: -5px;\n}\n\n.resto-item_name {\n  font-weight: bold;\n  font-size: 24px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n  padding: 0 16px 0 16px;\n  text-align: left; /* Posisi teks menjadi kiri */\n}\n\n.resto-item_name:hover {\n  opacity: 0.7;\n}\n\n.resto-item_name {\n  font-size: 1.4rem;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  color: #333;\n  margin: 10px 0;\n}\n\n.resto-item_desc {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 16px 15px;\n  font-size: 14px;\n  line-height: 1.5em;\n  color: black;\n}\n\n/* Footer */\nfooter {\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  padding: 20px 0;\n}\n.footer-text {\n  margin: 0;\n}\n\n#root {\n  padding-top: 65px;\n}\n\n/* Detail */\n\n.resto-item {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  margin: 20px 0;\n  transition: transform 0.3s;\n}\n\n.resto-item:hover {\n  transform: scale(1.05);\n}\n\n.resto-item a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.resto-item_image {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-bottom: 1px solid #ddd;\n}\n\n.resto-item_content {\n  padding: 15px;\n  text-align: center;\n}\n\n.resto-item_city {\n  font-size: 10pt;\n  font-weight: bold;\n  color: #fff;\n}\n\n.resto-item_name {\n  font-size: 1.2em;\n  margin: 10px 0;\n  color: #333;\n}\n\n.resto-item_rating {\n  color: #ffa500;\n}\n\n.resto-item_desc {\n  font-size: 0.9em;\n  color: #666;\n  margin-top: 10px;\n  text-align: justify;\n}\n\n.detail {\n  padding: 20px;\n}\n\n.container-info {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.img-container {\n  flex: 1 1 300px;\n  text-align: center;\n}\n\n.resto-item_image-container {\n  width: 100%;\n  height: auto;\n  max-height: 400px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.detail-info {\n  flex: 1 1 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.resto-name, .resto-rating {\n  font-size: 1.1em;\n  color: #333;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.resto-address {\n  margin-left: 10px;\n  font-size: 10pt;\n  color: #333;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.detail-name-address-rating {\n  margin: 0;\n}\n\n.detail-desc {\n  font-size: 1em;\n  line-height: 1.5em;\n  color: #555;\n  margin-top: 1px;\n  margin-left: 10px;\n}\n\n.resto-category {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-left: 10px;\n}\n\n.category {\n  background-color: #6699CC; /* Warna dengan transparansi */\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 0.9em;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Efek bayangan */\n  transition: background-color 0.3s ease; /* Transisi perubahan warna latar belakang */\n}\n\n/* Efek hover */\n.category:hover {\n  background-color: rgba(255, 99, 71, 0.9); /* Warna latar belakang yang lebih gelap saat hover */\n}\n\n.restaurant-detail__menu-list {\n  margin-top: 20px;\n}\n\n.menu-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.menu-table th, .menu-table td {\n  border: 1px solid #fff;\n  padding: 8px;\n  text-align: left;\n}\n\n.menu-table th {\n  background-color: #557799;\n  color: white;\n}\n\n.menu-table tr:nth-child(even) {\n  background-color: #f2f2f2; /* Warna latar belakang baris genap */\n}\n\n.menu-table td ul {\n  list-style-type: none; /* Menghilangkan bullet points */\n  padding-left: 0;\n  margin: 0;\n}\n\n.menu-table td ul li {\n  margin: 5px 0;\n}\n\n.detail-review {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.detail-review-item {\n  background-color: #f4f4f4;\n  border-radius: 10px;\n  padding: 15px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.header-review {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n\n.name-review {\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\n.date-review {\n  font-size: 0.9em;\n  color: #888;\n}\n\n.body-review {\n  font-size: 1em;\n  color: #555;\n  text-align: justify;\n}\n\n.like {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\nform {\n  margin: 2em 0;\n  padding: 1.5em;\n  border: 2px solid #6699CC;\n  border-radius: 10px;\n  background-color: #fefefe;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 50px;\n  padding: 0.5em;\n  font-size: 1em;\n  color: #333;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  margin-bottom: 1em;\n}\n\n.form-label {\n  font-size: 1.1em;\n  color: #333;\n  margin-bottom: 0.5em;\n}\n\n.btn {\n  display: block;\n  width: 100px;\n  height: 40px;\n  font-size: 1em;\n  color: white;\n  background-color: #6699CC;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  text-align: center;\n  line-height: 40px;\n  transition: background-color 0.3s;\n}\n\n.btn:hover {\n  background-color: #e5533d;\n}\n"],sourceRoot:""}]);const a=r},900:(n,A,e)=>{e.d(A,{A:()=>a});var t=e(354),o=e.n(t),i=e(314),r=e.n(i)()(o());r.push([n.id,'@media screen and (max-width: 1000px) {\n  .nav-container {\n    display: block;\n  }\n  .header_menu {\n    font-size: 20px;\n    display: block;\n    width: 44px;\n    height: 44px;\n  }\n  .nav__menu {\n    justify-content: start;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.4s ease-in-out;\n  }\n  .main-resto_container {\n    padding: 25px 20px;\n  }\n  .hero-container .hero-content-container {\n    text-align: left;\n    line-height: 1.5em;\n  }\n  .skip2content {\n    display: none;\n  }\n  .hero-container {\n    background-image: url("/images/sharp/hero-image_1-small.jpg");\n  }\n}\n\n@media only screen and (min-width: 800px) {\n  .header_menu {\n    transform: translateX(-9999px); \n    width: 44px;\n    height: 44px;\n  }\n  .main-resto_label {\n    font-size: 26px;\n  }\n  .list-resto {\n    grid-template-columns: 1fr 1fr;\n  }\n  .resto-item_name {\n    font-size: 22px;\n  }\n  .main-resto_container {\n    padding: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  nav {\n    padding: 0 100px;\n  }\n  .main-resto_container {\n    padding: 0 100px;\n  }\n  .list-resto {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .container-info {\n    display: grid;\n    grid-template-columns: 1.5fr 1fr;\n    grid-gap: 1.5em;\n    margin-top: 1em;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .restaurant-detail__info,\n  .restaurant-detail__menu-list,\n  .restaurant-detail__review {\n    margin-bottom: 5px;\n    display: grid;\n    grid-template-columns: repeat(1, minmax(200px, 1fr));\n    gap: 50px;\n    margin: 0 auto;\n  }\n  .detail-review {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .resto-item_image-container {\n    max-width: 300px;\n  }\n}\n',"",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;IACE,cAAc;EAChB;EACA;IACE,eAAe;IACf,cAAc;IACd,WAAW;IACX,YAAY;EACd;EACA;IACE,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,uCAAuC;EACzC;EACA;IACE,kBAAkB;EACpB;EACA;IACE,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,aAAa;EACf;EACA;IACE,6DAA6D;EAC/D;AACF;;AAEA;EACE;IACE,8BAA8B;IAC9B,WAAW;IACX,YAAY;EACd;EACA;IACE,eAAe;EACjB;EACA;IACE,8BAA8B;EAChC;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,kCAAkC;EACpC;EACA;IACE,aAAa;IACb,gCAAgC;IAChC,eAAe;IACf,eAAe;EACjB;AACF;;AAEA;EACE;;;IAGE,kBAAkB;IAClB,aAAa;IACb,oDAAoD;IACpD,SAAS;IACT,cAAc;EAChB;EACA;IACE,aAAa;IACb,0BAA0B;IAC1B,SAAS;EACX;EACA;IACE,gBAAgB;EAClB;AACF",sourcesContent:['@media screen and (max-width: 1000px) {\n  .nav-container {\n    display: block;\n  }\n  .header_menu {\n    font-size: 20px;\n    display: block;\n    width: 44px;\n    height: 44px;\n  }\n  .nav__menu {\n    justify-content: start;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.4s ease-in-out;\n  }\n  .main-resto_container {\n    padding: 25px 20px;\n  }\n  .hero-container .hero-content-container {\n    text-align: left;\n    line-height: 1.5em;\n  }\n  .skip2content {\n    display: none;\n  }\n  .hero-container {\n    background-image: url("/images/sharp/hero-image_1-small.jpg");\n  }\n}\n\n@media only screen and (min-width: 800px) {\n  .header_menu {\n    transform: translateX(-9999px); \n    width: 44px;\n    height: 44px;\n  }\n  .main-resto_label {\n    font-size: 26px;\n  }\n  .list-resto {\n    grid-template-columns: 1fr 1fr;\n  }\n  .resto-item_name {\n    font-size: 22px;\n  }\n  .main-resto_container {\n    padding: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  nav {\n    padding: 0 100px;\n  }\n  .main-resto_container {\n    padding: 0 100px;\n  }\n  .list-resto {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .container-info {\n    display: grid;\n    grid-template-columns: 1.5fr 1fr;\n    grid-gap: 1.5em;\n    margin-top: 1em;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .restaurant-detail__info,\n  .restaurant-detail__menu-list,\n  .restaurant-detail__review {\n    margin-bottom: 5px;\n    display: grid;\n    grid-template-columns: repeat(1, minmax(200px, 1fr));\n    gap: 50px;\n    margin: 0 auto;\n  }\n  .detail-review {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .resto-item_image-container {\n    max-width: 300px;\n  }\n}\n'],sourceRoot:""}]);const a=r},370:(n,A,e)=>{var t=e(72),o=e.n(t),i=e(825),r=e.n(i),a=e(659),l=e.n(a),s=e(56),p=e.n(s),d=e(540),E=e.n(d),C=e(113),B=e.n(C),m=e(245),g={};g.styleTagTransform=B(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=E(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals},143:(n,A,e)=>{var t=e(72),o=e.n(t),i=e(825),r=e.n(i),a=e(659),l=e.n(a),s=e(56),p=e.n(s),d=e(540),E=e.n(d),C=e(113),B=e.n(C),m=e(900),g={};g.styleTagTransform=B(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=E(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return A[n](i,i.exports,t),i.exports}t.m=A,n=[],t.O=(A,e,o,i)=>{if(!e){var r=1/0;for(p=0;p<n.length;p++){for(var[e,o,i]=n[p],a=!0,l=0;l<e.length;l++)(!1&i||r>=i)&&Object.keys(t.O).every((n=>t.O[n](e[l])))?e.splice(l--,1):(a=!1,i<r&&(r=i));if(a){n.splice(p--,1);var s=o();void 0!==s&&(A=s)}}return A}i=i||0;for(var p=n.length;p>0&&n[p-1][2]>i;p--)n[p]=n[p-1];n[p]=[e,o,i]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var e in A)t.o(A,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={580:0};t.O.j=A=>0===n[A];var A=(A,e)=>{var o,i,[r,a,l]=e,s=0;if(r.some((A=>0!==n[A]))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(l)var p=l(t)}for(A&&A(e);s<r.length;s++)i=r[s],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(p)},e=self.webpackChunksukamaju_apps=self.webpackChunksukamaju_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),t.nc=void 0;var o=t.O(void 0,[822,738,74,720],(()=>t(956)));o=t.O(o)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map