/**
 * Fallback & Offline Dataset for Asian Computers & Asian Video Films (AVF)
 * Used when running via file:// or if fetch is unavailable.
 */
window.AVF_DEFAULT_DATA = {
  settings: {
    shop_name: "Asian Computers & Asian Video Films",
    short_name: "AVF",
    tagline: "Your Complete Destination for Tech, Computers & Cinematic Production",
    description: "Retail computer hardware store, Apple products & accessories, custom gaming rigs, CCTV security systems, and award-winning cinematic video production & photography studio with branches in Delhi and Ambedkar Nagar.",
    announcement: "🔥 Festive Offer: Up to 25% Off on Custom PC Builds & Free CCTV Camera Site Inspection! Visit our Delhi or Ambedkar Nagar branch today.",
    primary_whatsapp: "919452352700",
    primary_phone: "+91 9452352700",
    secondary_phone: "+91 9999999776",
    email: "contact@asianvideofilms.com",
    working_hours: "Monday - Sunday: 9:00 AM - 9:00 PM",
    experience_years: 15,
    happy_clients: "10,000+",
    weddings_filmed: "500+",
    products_sold: "25,000+",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      whatsapp: "https://wa.me/919452352700"
    }
  },

  branches: [
    {
      id: "delhi-branch",
      name: "Asian Computer & Asian Video Films",
      short_name: "Delhi Branch",
      tag: "Delhi NCR Branch",
      is_hq: false,
      address: "Main Wazirabad Road, Biharipur Extn / Sonia Vihar, Shahdara North",
      city: "Delhi",
      state: "Delhi",
      pincode: "110094",
      country: "India",
      full_address: "Main Wazirabad Road, Biharipur Extension / Sonia Vihar, Shahdara North, Delhi - 110094",
      phones: ["+91 9999999776", "+91 9007199254"],
      whatsapp: "919999999776",
      email: "delhi@asianvideofilms.com",
      opening_hours: "Monday - Sunday: 9:30 AM - 9:00 PM",
      latitude: 28.7343337,
      longitude: 77.2540286,
      google_maps_url: "https://maps.app.goo.gl/bcLu8VQqSZ9xo7dh7",
      embed_map_url: "https://maps.google.com/maps?q=28.7343337,77.2540286&hl=en&z=16&output=embed",
      rating: 4.9,
      reviews_count: 86,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      features: [
        "Retail Computer Hardware & Laptops",
        "Custom Gaming & Workstation Assembly",
        "Apple Devices, Accessories & Repairs",
        "Photo Studio & Urgency Printing",
        "CCTV Surveillance & Security Solutions"
      ]
    },
    {
      id: "ambedkar-nagar-branch",
      name: "Asian Computers & Asian Video Films",
      short_name: "Ambedkar Nagar Branch",
      tag: "Head Office & Studio Hub",
      is_hq: true,
      address: "Iltifatganj to Akbarpur Road, Nawsanda / Kedar Nagar, Gauhaniya, Tanda",
      city: "Ambedkar Nagar",
      state: "Uttar Pradesh",
      pincode: "224230",
      country: "India",
      full_address: "Iltifatganj to Akbarpur Road, Nawsanda / Kedar Nagar, Gauhaniya, Tanda, Ambedkar Nagar, Uttar Pradesh - 224230",
      phones: ["+91 9452352700", "+91 9794445700"],
      whatsapp: "919452352700",
      email: "headquarters@asianvideofilms.com",
      opening_hours: "Monday - Sunday: 9:00 AM - 8:30 PM",
      latitude: 26.5507435,
      longitude: 82.5492035,
      google_maps_url: "https://maps.app.goo.gl/XHpWwRbCYaPwpJ6X7",
      embed_map_url: "https://maps.google.com/maps?q=26.5507435,82.5492035&hl=en&z=16&output=embed",
      rating: 5.0,
      reviews_count: 142,
      image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80",
      features: [
        "Cinematic Wedding Film Production House",
        "4K Drone & High-End Camera Gear Studio",
        "Authorized Tech & Apple Products Retail",
        "Custom Desktop Rig & Hardware Upgrades",
        "Complete CCTV Setup & Digital Printing"
      ]
    }
  ],

  categories: [
    "All",
    "Laptops & Computers",
    "PC Components & Builds",
    "Apple & Premium Tech",
    "Accessories & Peripherals",
    "CCTV & Security",
    "Photo & Video Studio",
    "Printers & Office IT"
  ],

  products: [
    {
      id: "prod-1",
      title: "Custom Gaming & 4K Video Editing Rig (Core i7 / RTX 4060)",
      sku: "AVF-PC-G4K",
      category: "PC Components & Builds",
      price: 86990,
      mrp: 105000,
      in_stock: true,
      featured: true,
      badge: "Top Seller",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80",
      short_desc: "High-performance rig optimized for 4K timeline rendering, gaming, and 3D modeling.",
      specs: [
        "Processor: Intel Core i7 13700F (16 Cores, up to 5.2 GHz)",
        "GPU: NVIDIA GeForce RTX 4060 8GB GDDR6",
        "Memory: 32GB DDR5 5200MHz Dual Channel RAM",
        "Storage: 1TB Gen4 NVMe M.2 SSD (7000 MB/s)",
        "Cooling: 240mm ARGB Liquid Cooler",
        "Power & Case: 650W 80+ Bronze PSU with Tempered Glass ARGB Case",
        "Warranty: 3 Years Onsite Hardware Warranty"
      ]
    },
    {
      id: "prod-2",
      title: "HP 15s FHD Laptop (Intel Core i5 12th Gen / 16GB / 512GB SSD)",
      sku: "AVF-LAP-HP15",
      category: "Laptops & Computers",
      price: 48990,
      mrp: 62500,
      in_stock: true,
      featured: true,
      badge: "Best Deal",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
      short_desc: "Thin and light laptop for business, students, coding, and multitasking.",
      specs: [
        "Intel Core i5-1235U (10 Cores, 12 Threads)",
        "16GB DDR4 RAM (Expandable up to 32GB)",
        "512GB PCIe NVMe M.2 SSD",
        "15.6-inch Micro-Edge FHD Anti-glare Display",
        "Intel Iris Xe Graphics, Backlit Keyboard",
        "Windows 11 Home + MS Office 2021 Pre-installed"
      ]
    },
    {
      id: "prod-3",
      title: "Apple MacBook Air 13.6\" (M2 Chip / 8GB / 256GB SSD)",
      sku: "AVF-APL-MBA-M2",
      category: "Apple & Premium Tech",
      price: 83990,
      mrp: 99900,
      in_stock: true,
      featured: true,
      badge: "Genuine Apple",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
      short_desc: "Supercharged by the next-gen M2 chip with stunning Liquid Retina display and 18h battery.",
      specs: [
        "Apple M2 chip with 8-core CPU and 8-core GPU",
        "8GB Unified High-speed Memory",
        "256GB Superfast SSD Storage",
        "13.6-inch Liquid Retina display with True Tone",
        "1080p FaceTime HD Camera & MagSafe 3 Charging",
        "Silent fanless design with up to 18 hours battery life"
      ]
    },
    {
      id: "prod-4",
      title: "CP PLUS 4-Camera HD Night Vision CCTV Security Kit",
      sku: "AVF-CCTV-CP4",
      category: "CCTV & Security",
      price: 10999,
      mrp: 15500,
      in_stock: true,
      featured: true,
      badge: "Popular",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=700&q=80",
      short_desc: "Complete surveillance system with 4 HD cameras, DVR, 1TB hard drive, and mobile live view.",
      specs: [
        "2x Indoor Dome + 2x Outdoor Weatherproof Bullet Cameras (2.4MP)",
        "4-Channel Full HD Digital Video Recorder (DVR)",
        "1TB Seagate Surveillance Hard Drive (15-20 days continuous recording)",
        "High-output Power Supply Unit & BNC/DC Connectors",
        "Night Vision IR up to 20 meters",
        "Free Mobile Remote Monitoring App (Android & iOS)"
      ]
    },
    {
      id: "prod-5",
      title: "Dell Inspiron 3520 (Intel Core i3 12th Gen / 8GB / 512GB SSD / 120Hz)",
      sku: "AVF-LAP-DEL35",
      category: "Laptops & Computers",
      price: 35490,
      mrp: 44990,
      in_stock: true,
      featured: false,
      badge: "Value Pick",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80",
      short_desc: "Reliable everyday workhorse for office work, accounting, and streaming.",
      specs: [
        "Intel Core i3-1215U (6 Cores, up to 4.40 GHz)",
        "8GB DDR4 RAM (Expandable)",
        "512GB NVMe M.2 SSD",
        "15.6\" FHD WVA AG 120Hz 250 nits Display",
        "Spill-resistant full size keyboard",
        "Fast charging: 80% charge in 60 minutes"
      ]
    },
    {
      id: "prod-6",
      title: "Samsung 980 1TB NVMe PCIe 3.0 M.2 Solid State Drive",
      sku: "AVF-SSD-SAM1TB",
      category: "PC Components & Builds",
      price: 6499,
      mrp: 8999,
      in_stock: true,
      featured: false,
      badge: "High Speed",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=700&q=80",
      short_desc: "Upgrade your PC or laptop with blazingly fast 3,500 MB/s read speeds.",
      specs: [
        "Sequential Read speeds up to 3,500 MB/s",
        "Sequential Write speeds up to 3,000 MB/s",
        "DRAM-less design powered by HMB technology",
        "Dynamic Thermal Guard protection",
        "5 Years Manufacturer Warranty"
      ]
    },
    {
      id: "prod-7",
      title: "Canon PIXMA G3010 All-in-One Ink Tank Color Wi-Fi Printer",
      sku: "AVF-PRN-CAN3010",
      category: "Printers & Office IT",
      price: 13490,
      mrp: 16995,
      in_stock: true,
      featured: true,
      badge: "Shop Favorite",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=700&q=80",
      short_desc: "High volume low-cost wireless printing, scanning and copying for home & studio.",
      specs: [
        "Print, Scan, Copy with Built-in Wi-Fi & Direct Wireless",
        "High yield ink bottles: up to 7,000 color pages / 6,000 black pages",
        "Page yield per print cost: as low as 9 paise (B&W) and 32 paise (Color)",
        "Borderless photo printing up to A4 size",
        "1.2-inch Segment LCD Screen"
      ]
    },
    {
      id: "prod-8",
      title: "Apple iPad 10th Gen 10.9-inch Wi-Fi (64GB / A14 Bionic)",
      sku: "AVF-APL-IPAD10",
      category: "Apple & Premium Tech",
      price: 31990,
      mrp: 39900,
      in_stock: true,
      featured: false,
      badge: "Trending",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80",
      short_desc: "All-screen design with 10.9-inch Liquid Retina display, Touch ID, and USB-C.",
      specs: [
        "10.9-inch Liquid Retina display with True Tone",
        "A14 Bionic chip with 6-core CPU and 4-core GPU",
        "12MP Ultra Wide front camera with Center Stage",
        "12MP Wide back camera with 4K video recording",
        "Supports Apple Pencil & Magic Keyboard Folio"
      ]
    },
    {
      id: "prod-9",
      title: "Digitek 18-Inch Professional Bi-Color LED Ring Light Kit",
      sku: "AVF-STU-RING18",
      category: "Photo & Video Studio",
      price: 2899,
      mrp: 4995,
      in_stock: true,
      featured: false,
      badge: "Studio Grade",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
      short_desc: "Ideal for portrait photography, makeup shoots, video podcasting, and YouTube content.",
      specs: [
        "18-inch (45cm) large circular diffuser ring light",
        "Bi-color temperature control (3200K warm to 5600K daylight)",
        "Brightness dimming from 10% to 100%",
        "Comes with 9ft heavy duty metal light stand",
        "Smartphone mount holder & hot-shoe adapter included"
      ]
    },
    {
      id: "prod-10",
      title: "Boya BY-M1 Pro Omnidirectional Lavalier Microphone",
      sku: "AVF-MIC-BYM1P",
      category: "Photo & Video Studio",
      price: 999,
      mrp: 1999,
      in_stock: true,
      featured: false,
      badge: "Creator Pick",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
      short_desc: "Crystal clear audio recording for smartphones, DSLR cameras, camcorders, and PCs.",
      specs: [
        "Clip-on mic for Smartphones, DSLRs, Audio Recorders",
        "Omni-directional condenser capsule",
        "-10dB sound attenuation switch",
        "Headphone monitoring playback jack",
        "6-meter (20-foot) heavy duty shielded cable"
      ]
    },
    {
      id: "prod-11",
      title: "TP-Link Tapo C200 360° 1080P Wi-Fi Smart Home Security Camera",
      sku: "AVF-CCTV-TAP200",
      category: "CCTV & Security",
      price: 1999,
      mrp: 3299,
      in_stock: true,
      featured: false,
      badge: "Smart IoT",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1549109926-58f039549485?auto=format&fit=crop&w=700&q=80",
      short_desc: "Pan/Tilt home security camera with crystal clear night vision and two-way audio.",
      specs: [
        "Full HD 1080p resolution with 360° horizontal coverage",
        "Advanced night vision up to 30 feet in complete darkness",
        "Motion detection with instant smartphone push alerts",
        "Two-way talk with built-in microphone & speaker",
        "Supports microSD card storage up to 512GB and cloud backup"
      ]
    },
    {
      id: "prod-12",
      title: "Mechanical RGB Gaming Keyboard & Precision Mouse Combo",
      sku: "AVF-ACC-RGBCOM",
      category: "Accessories & Peripherals",
      price: 2199,
      mrp: 3499,
      in_stock: true,
      featured: false,
      badge: "RGB Lighting",
      branches: ["both"],
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
      short_desc: "Tactile blue switch mechanical keyboard with braided cable and 7200 DPI gaming mouse.",
      specs: [
        "Full-sized mechanical keyboard with tactile clicky blue switches",
        "Individual key rainbow RGB backlighting with 14 preset modes",
        "Anti-ghosting on all 104 keys",
        "Ergonomic gaming mouse with 6 programmable buttons (up to 7200 DPI)",
        "Braided anti-tangle USB cable"
      ]
    }
  ],

  services: [
    {
      id: "serv-1",
      title: "Cinematic Wedding & Event Videography",
      slug: "wedding-cinematography",
      category: "Video Production",
      icon: "film",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      starting_price: "Starting ₹25,000",
      branches: ["both"],
      short_desc: "Full-length 4K cinematic wedding movies, traditional ceremonies, teasers, and high-energy highlight reels.",
      deliverables: [
        "Multi-camera 4K UHD coverage with gimbal stabilization",
        "Cinematic teaser video (60s reel) within 48 hours",
        "Full ceremony documentation film with crisp audio recording",
        "Master color graded in DaVinci Resolve",
        "Delivered on customized luxury USB drive & cloud download"
      ]
    },
    {
      id: "serv-2",
      title: "Pre-Wedding & Creative Fashion Shoots",
      slug: "pre-wedding-shoots",
      category: "Photography & Studio",
      icon: "camera",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      starting_price: "Starting ₹15,000",
      branches: ["both"],
      short_desc: "Romantic, aesthetic pre-wedding photo & video sessions with customized themes, styling, and location shoots.",
      deliverables: [
        "Full-day destination or outdoor location shoot",
        "Drone aerial romantic sequence clips",
        "50+ edited high-resolution digital master portraits",
        "Cinematic 2-3 minute romantic teaser film",
        "Designer hardcover coffee-table photo book"
      ]
    },
    {
      id: "serv-3",
      title: "Custom PC Assembly & Workstation Building",
      slug: "custom-pc-build",
      category: "IT & Hardware",
      icon: "cpu",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
      starting_price: "Assembly starting ₹999",
      branches: ["both"],
      short_desc: "Tailor-made desktop computers for gaming, video rendering, AutoCAD, architecture, and office productivity.",
      deliverables: [
        "Component consultation matched exactly to your budget and software needs",
        "Expert static-safe assembly & clean cable routing",
        "24-hour thermal stress testing & benchmark burn-in",
        "Clean OS setup, latest BIOS & GPU drivers",
        "Full warranty registration assistance"
      ]
    },
    {
      id: "serv-4",
      title: "Laptop, Mac & PC Repair / Chip-Level Service",
      slug: "computer-repairs",
      category: "IT & Hardware",
      icon: "wrench",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
      starting_price: "Diagnostics starting ₹299",
      branches: ["both"],
      short_desc: "Fast turnaround repair for slow laptops, broken displays, motherboard chip repairs, and SSD upgrades.",
      deliverables: [
        "Free preliminary fault diagnosis",
        "SSD & RAM express upgrade (Same day 30-minute turnaround)",
        "Broken hinge, keyboard, trackpad, and screen replacement",
        "Liquid damage recovery & chip-level motherboard repair",
        "Data backup, virus cleaning & OS reinstallation"
      ]
    },
    {
      id: "serv-5",
      title: "CCTV Security Surveillance Installation",
      slug: "cctv-installation",
      category: "Security Solutions",
      icon: "shield",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      starting_price: "Installation from ₹350/camera",
      branches: ["both"],
      short_desc: "Turnkey installation of CP PLUS, Hikvision, and Wi-Fi cameras for homes, retail shops, warehouses, and schools.",
      deliverables: [
        "Free on-site camera placement survey & quotation",
        "Concealed neat wiring and weatherproof junction boxes",
        "Mobile phone live stream setup on client's phone",
        "DVR/NVR configuration and motion alert notifications",
        "1-Year complimentary on-site maintenance support"
      ]
    },
    {
      id: "serv-6",
      title: "4K Drone Aerial Photography & Videography",
      slug: "drone-shoots",
      category: "Video Production",
      icon: "plane",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
      starting_price: "Starting ₹5,000/session",
      branches: ["both"],
      short_desc: "Spectacular aerial perspectives for weddings, large events, real estate properties, and commercial films.",
      deliverables: [
        "Licensed, certified drone pilot with DJI 4K aircraft",
        "Smooth cinematic pans, birds-eye reveals, and tracking shots",
        "High-wind resistance and dual battery sessions",
        "Uncompressed 4K video clips & RAW aerial photos",
        "Instant review on HD ground monitor"
      ]
    }
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Cinematic Royal Wedding Film",
      category: "Cinematography",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      branch: "Ambedkar Nagar Branch",
      caption: "Grand wedding celebration captured in ultra-sharp 4K with drone coverage and warm cinematic tone."
    },
    {
      id: "gal-2",
      title: "Custom Water-Cooled RTX 4080 Rig",
      category: "Custom PC Builds",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80",
      branch: "Delhi Branch",
      caption: "Precision cable management and ARGB synchronized lighting for a professional video editor in Delhi."
    },
    {
      id: "gal-3",
      title: "Sunset Pre-Wedding Silhouette",
      category: "Studio & Photography",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      branch: "Ambedkar Nagar Branch",
      caption: "Romantic outdoor portrait session capturing genuine golden hour emotion."
    },
    {
      id: "gal-4",
      title: "Retail Hardware Showroom & Apple Hub",
      category: "Retail Store",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
      branch: "Delhi Branch",
      caption: "Wide selection of verified original components, laptops, monitors, and peripherals in stock."
    },
    {
      id: "gal-5",
      title: "Commercial 16-Camera CCTV Installation",
      category: "Security & IT",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80",
      branch: "Ambedkar Nagar Branch",
      caption: "Commercial warehouse multi-angle surveillance setup with remote mobile control."
    },
    {
      id: "gal-6",
      title: "Traditional Haldi & Mehndi Moments",
      category: "Cinematography",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
      branch: "Ambedkar Nagar Branch",
      caption: "Vibrant colors, candid joy, and timeless traditional ceremonial rituals."
    }
  ],

  reviews: [
    {
      id: "rev-1",
      author: "Ankit Srivastava",
      rating: 5,
      date: "2026-08-14",
      branch: "Ambedkar Nagar Branch",
      service: "Wedding Cinematography & Drone",
      comment: "Asian Video Films covered my brother's wedding in Ambedkar Nagar. The teaser reel and the full 4K cinematic film made our entire family emotional. Their camera team is polite, punctual, and extremely creative. Truly the best in UP!"
    },
    {
      id: "rev-2",
      author: "Rahul Verma",
      rating: 5,
      date: "2026-09-02",
      branch: "Delhi Branch",
      service: "Custom PC Build (i7 + RTX 4060)",
      comment: "Got my video editing and gaming rig assembled from Asian Computer in Delhi (Sonia Vihar / Biharipur). The cable management is flawless and pricing was better than Nehru Place! They even stress-tested the system before delivery."
    },
    {
      id: "rev-3",
      author: "Pooja Sharma",
      rating: 5,
      date: "2026-07-28",
      branch: "Delhi Branch",
      service: "HP Laptop Purchase & Fast Setup",
      comment: "Genuine products with manufacturer warranty. The team helped me choose the perfect HP laptop for my graphic design coursework and transferred all my old data free of cost. Highly recommended store!"
    },
    {
      id: "rev-4",
      author: "Mohd. Tariq",
      rating: 5,
      date: "2026-09-20",
      branch: "Ambedkar Nagar Branch",
      service: "8-Camera CP PLUS CCTV Installation",
      comment: "Got complete CCTV security done for our showroom in Kedar Nagar. The technician completed wiring without any mess and connected all cameras to my mobile phone so I can monitor from anywhere. Very professional!"
    }
  ]
};
