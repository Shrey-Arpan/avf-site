/**
 * Main Application Logic for Asian Computers & Asian Video Films (AVF)
 * Fully zero-backend, Git/Decap CMS ready, GitHub Pages compatible.
 */

// Global State
const state = {
  settings: {},
  branches: [],
  products: [],
  categories: [],
  services: [],
  gallery: [],
  reviews: [],
  activeBranch: 'all',          // 'all', 'delhi-branch', 'ambedkar-nagar-branch'
  activeCategory: 'All',
  searchQuery: '',
  sortBy: 'featured',
  activeMapBranch: 'delhi-branch',
  activeGalleryCategory: 'All',
  cart: []                      // { id, title, sku, price, qty, branch, image }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  loadCartFromStorage();
  await loadStoreData();
  initEventListeners();
  renderAll();
  lucide.createIcons();
});

// Load Data from JSON files or Fallback
async function loadStoreData() {
  try {
    const timestamp = Date.now();
    // Try fetching JSON files
    const [settingsRes, branchesRes, productsRes, servicesRes, galleryRes, reviewsRes] = await Promise.all([
      fetch(`./data/settings.json?v=${timestamp}`),
      fetch(`./data/branches.json?v=${timestamp}`),
      fetch(`./data/products.json?v=${timestamp}`),
      fetch(`./data/services.json?v=${timestamp}`),
      fetch(`./data/gallery.json?v=${timestamp}`),
      fetch(`./data/reviews.json?v=${timestamp}`)
    ]);

    if (!settingsRes.ok || !branchesRes.ok || !productsRes.ok) {
      throw new Error('Network error or file:// origin');
    }

    state.settings = await settingsRes.json();
    const branchesData = await branchesRes.json();
    state.branches = branchesData.branches || [];

    const productsData = await productsRes.json();
    state.categories = productsData.categories || [];
    state.products = productsData.products || [];

    const servicesData = await servicesRes.json();
    state.services = servicesData.services || [];

    const galleryData = await galleryRes.json();
    state.gallery = galleryData.items || [];

    const reviewsData = await reviewsRes.json();
    state.reviews = reviewsData.reviews || [];

    console.log('✅ Loaded data from live JSON files successfully.');
  } catch (err) {
    console.warn('⚠️ Fetching JSON data directly failed (likely running via file:// or offline). Using bundled fallback data:', err);
    if (window.AVF_DEFAULT_DATA) {
      state.settings = window.AVF_DEFAULT_DATA.settings;
      state.branches = window.AVF_DEFAULT_DATA.branches;
      state.categories = window.AVF_DEFAULT_DATA.categories;
      state.products = window.AVF_DEFAULT_DATA.products;
      state.services = window.AVF_DEFAULT_DATA.services;
      state.gallery = window.AVF_DEFAULT_DATA.gallery;
      state.reviews = window.AVF_DEFAULT_DATA.reviews;
    }
  }
}

// Render entire UI
function renderAll() {
  renderSettings();
  renderBranches();
  renderProducts();
  renderServices();
  renderReviews();
  renderMap();
  updateCartBadge();
}

// 1. Settings & General Info
function renderSettings() {
  const s = state.settings;
  if (!s) return;

  // Announcement bar
  const annEl = document.getElementById('announcement-banner');
  if (annEl && s.announcement) {
    annEl.textContent = s.announcement;
  }

  // Header quick contacts
  const callBtn = document.getElementById('header-call-btn');
  if (callBtn) {
    callBtn.href = `tel:${s.primary_phone}`;
    const span = callBtn.querySelector('.phone-text');
    if (span) span.textContent = s.primary_phone;
  }

  // Floating WhatsApp button
  const waFloat = document.getElementById('floating-whatsapp');
  if (waFloat) {
    waFloat.href = `https://wa.me/${s.primary_whatsapp}?text=${encodeURIComponent('Hello Asian Computers & Video Films! I would like to inquire about your products and services.')}`;
  }

  // Stats
  if (document.getElementById('stat-experience')) document.getElementById('stat-experience').textContent = `${s.experience_years}+`;
  if (document.getElementById('stat-clients')) document.getElementById('stat-clients').textContent = s.happy_clients;
  if (document.getElementById('stat-weddings')) document.getElementById('stat-weddings').textContent = s.weddings_filmed;
  if (document.getElementById('stat-products')) document.getElementById('stat-products').textContent = s.products_sold;
}

// 2. Shop Branches (Delhi & Ambedkar Nagar)
function renderBranches() {
  const container = document.getElementById('branches-grid');
  if (!container) return;

  container.innerHTML = state.branches.map(b => {
    const isSelected = state.activeBranch === b.id;
    return `
      <div class="glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border ${isSelected ? 'ring-2 ring-indigo-600 border-indigo-600 bg-indigo-50/20' : 'border-slate-200'}">
        <div class="relative h-56 overflow-hidden">
          <img src="${b.image}" alt="${b.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
          
          <div class="absolute top-4 left-4 flex flex-wrap gap-2">
            <span class="px-3 py-1 text-xs font-bold rounded-full ${b.is_hq ? 'bg-amber-500 text-slate-950' : 'bg-indigo-600 text-white'} shadow-sm">
              ${b.tag}
            </span>
            ${b.is_hq ? '<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-900/80 text-white backdrop-blur-sm">Head Office</span>' : ''}
          </div>

          <div class="absolute bottom-4 left-4 right-4 text-white">
            <h3 class="text-xl font-bold font-heading text-white">${b.name}</h3>
            <p class="text-xs text-slate-200 flex items-center gap-1.5 mt-0.5">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-400"></i> ${b.city}, ${b.state} (${b.pincode})
            </p>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div class="flex items-center gap-1 text-amber-500 font-semibold text-sm">
                <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
                <span>${b.rating}</span>
                <span class="text-slate-400 text-xs">(${b.reviews_count} Google Reviews)</span>
              </div>
              <span class="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Open 7 Days
              </span>
            </div>

            <p class="text-sm text-slate-600 mb-4 leading-relaxed">
              <strong class="text-slate-800">Address:</strong> ${b.full_address}
            </p>

            <div class="space-y-2 mb-4 text-sm text-slate-600">
              <div class="flex items-start gap-2">
                <i data-lucide="clock" class="w-4 h-4 text-slate-400 shrink-0 mt-0.5"></i>
                <span>${b.opening_hours}</span>
              </div>
              <div class="flex items-start gap-2">
                <i data-lucide="phone" class="w-4 h-4 text-slate-400 shrink-0 mt-0.5"></i>
                <span>${b.phones.join(' / ')}</span>
              </div>
            </div>

            <!-- Services Pills -->
            <div class="mb-5">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Branch Highlights</span>
              <div class="flex flex-wrap gap-1.5">
                ${b.features.map(f => `
                  <span class="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                    ${f}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
            <a href="${b.google_maps_url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all">
              <i data-lucide="navigation" class="w-3.5 h-3.5 text-indigo-600"></i> Get Directions
            </a>
            <a href="https://wa.me/${b.whatsapp}?text=${encodeURIComponent(`Hello ${b.name}, I would like to visit or place an inquiry.`)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-all">
              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> WhatsApp Branch
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 3. Category Filter Pills
function renderCategoryFilterPills() {
  const container = document.getElementById('category-filter-container');
  if (!container) return;

  container.innerHTML = state.categories.map(cat => {
    const isActive = state.activeCategory === cat;
    return `
      <button onclick="setCategoryFilter('${cat}')" class="px-4 py-2 text-xs md:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 ${
        isActive 
          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
      }">
        ${cat}
      </button>
    `;
  }).join('');
}

// 3. Products Catalog
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = state.products;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-dashed border-slate-300">
        <i data-lucide="package" class="w-12 h-12 text-slate-300 mx-auto mb-3"></i>
        <h4 class="text-base font-bold text-slate-700">Products will appear here</h4>
        <p class="text-xs text-slate-500 max-w-sm mx-auto mt-1">Add items via Decap CMS in /admin</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(p => {
    const discount = p.mrp && p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
    const branchLabel = p.branches.includes('both') 
      ? 'Available at Delhi & Ambedkar Nagar' 
      : p.branches.includes('delhi-branch') ? 'Delhi Branch Stock' : 'Ambedkar Nagar Stock';

    return `
      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
        <!-- Image Area -->
        <div class="relative h-52 bg-slate-50 overflow-hidden p-3 flex items-center justify-center">
          <img src="${p.image}" alt="${p.title}" class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          
          <div class="absolute top-3 left-3 flex flex-col gap-1.5">
            ${p.badge ? `<span class="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-amber-500 text-slate-950 shadow-sm">${p.badge}</span>` : ''}
            ${discount > 0 ? `<span class="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-rose-500 text-white shadow-sm">${discount}% OFF</span>` : ''}
          </div>

          <div class="absolute bottom-2 right-2">
            <span class="text-[10px] font-semibold bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-slate-600 shadow-sm border border-slate-100">
              SKU: ${p.sku}
            </span>
          </div>
        </div>

        <!-- Product Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span class="font-medium text-indigo-600">${p.category}</span>
              <span class="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> In Stock
              </span>
            </div>

            <h3 class="font-bold text-slate-900 text-sm md:text-base leading-snug line-clamp-2 hover:text-indigo-600 cursor-pointer mb-2" onclick="openProductModal('${p.id}')">
              ${p.title}
            </h3>

            <p class="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
              ${p.short_desc || ''}
            </p>

            <!-- Price -->
            <div class="flex items-baseline gap-2 mb-3">
              <span class="text-xl font-extrabold text-slate-950 font-heading">₹${p.price.toLocaleString('en-IN')}</span>
              ${p.mrp ? `<span class="text-xs text-slate-400 line-through">₹${p.mrp.toLocaleString('en-IN')}</span>` : ''}
            </div>

            <div class="text-[11px] text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100 flex items-center gap-1.5 mb-4">
              <i data-lucide="store" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
              <span class="truncate">${branchLabel}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
            <button onclick="openProductModal('${p.id}')" class="px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Details
            </button>
            <button onclick="addToCart('${p.id}')" class="px-3 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1">
              <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i> Add to List
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// 5. Studio & IT Services
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = state.services.map(s => {
    return `
      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
        <div class="relative h-48 overflow-hidden">
          <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <div class="absolute top-3 left-3">
            <span class="px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-600 text-white shadow-sm">
              ${s.category}
            </span>
          </div>

          <div class="absolute bottom-3 left-3 right-3 text-white">
            <span class="text-xs font-semibold text-amber-400 block">${s.starting_price}</span>
            <h3 class="text-base font-bold font-heading text-white line-clamp-1">${s.title}</h3>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              ${s.short_desc}
            </p>

            <div class="space-y-1.5 mb-4">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Deliverables</span>
              ${s.deliverables.slice(0, 3).map(d => `
                <div class="flex items-start gap-1.5 text-xs text-slate-700">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"></i>
                  <span class="line-clamp-1">${d}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center gap-2">
            <button onclick="openServiceModal('${s.id}')" class="flex-1 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
              Full Details
            </button>
            <a href="https://wa.me/${state.settings.primary_whatsapp || '919452352700'}?text=${encodeURIComponent(`Hello Asian Computers & Video Films! I want to book / inquire about: ${s.title} (${s.starting_price})`)}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm flex items-center gap-1">
              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Book
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 6. Portfolio / Gallery
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const filtered = state.activeGalleryCategory === 'All' 
    ? state.gallery 
    : state.gallery.filter(g => g.category === state.activeGalleryCategory);

  container.innerHTML = filtered.map(item => {
    return `
      <div class="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900 aspect-video md:aspect-square cursor-pointer" onclick="openLightbox('${item.image}', '${item.title}', '${item.caption || ''}')">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
        
        <div class="absolute bottom-4 left-4 right-4 text-white">
          <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur-sm inline-block mb-1">
            ${item.category} • ${item.branch}
          </span>
          <h4 class="text-sm md:text-base font-bold font-heading line-clamp-1">${item.title}</h4>
          ${item.caption ? `<p class="text-xs text-slate-300 line-clamp-1 mt-0.5">${item.caption}</p>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// 7. Customer Reviews
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container) return;

  container.innerHTML = state.reviews.map(r => {
    return `
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-1 text-amber-400">
              ${Array(r.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>').join('')}
            </div>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
              ${r.branch}
            </span>
          </div>

          <p class="text-xs md:text-sm text-slate-700 leading-relaxed italic mb-4">
            "${r.comment}"
          </p>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <h5 class="text-xs font-bold text-slate-900">${r.author}</h5>
            <span class="text-[11px] text-slate-400">${r.service}</span>
          </div>
          <span class="text-[11px] text-slate-400">${r.date}</span>
        </div>
      </div>
    `;
  }).join('');
}

// 8. Interactive Map Switcher (Delhi vs Ambedkar Nagar)
function renderMap() {
  const container = document.getElementById('map-container');
  const detailsContainer = document.getElementById('map-branch-details');
  if (!container) return;

  const branch = state.branches.find(b => b.id === state.activeMapBranch) || state.branches[0];
  if (!branch) return;

  container.innerHTML = `
    <div class="map-responsive shadow-lg">
      <iframe 
        src="${branch.embed_map_url}" 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="Google Map of ${branch.name}">
      </iframe>
    </div>
  `;

  if (detailsContainer) {
    detailsContainer.innerHTML = `
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-1 text-xs font-bold rounded-md ${branch.is_hq ? 'bg-amber-500 text-slate-950' : 'bg-indigo-600 text-white'}">
              ${branch.tag}
            </span>
            <span class="text-xs text-slate-500 flex items-center gap-1">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i> ${branch.rating} (${branch.reviews_count} reviews)
            </span>
          </div>

          <h3 class="text-xl font-bold font-heading text-slate-900 mb-2">${branch.name}</h3>
          <p class="text-xs md:text-sm text-slate-600 mb-4 leading-relaxed">${branch.full_address}</p>

          <div class="space-y-2 text-xs md:text-sm text-slate-700 mb-6">
            <p><strong>🕒 Hours:</strong> ${branch.opening_hours}</p>
            <p><strong>📞 Contact:</strong> ${branch.phones.join(', ')}</p>
            <p><strong>💬 WhatsApp:</strong> +${branch.whatsapp}</p>
            <p><strong>✉️ Email:</strong> ${branch.email}</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
          <a href="${branch.google_maps_url}" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors">
            <i data-lucide="navigation" class="w-4 h-4"></i> Open in Google Maps
          </a>
          <a href="https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(`Hello ${branch.name}, I would like to visit your store. Please share landmarks.`)}" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors">
            <i data-lucide="message-circle" class="w-4 h-4"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    `;
  }

  // Update tabs
  document.querySelectorAll('.map-tab-btn').forEach(btn => {
    const tabId = btn.getAttribute('data-branch');
    if (tabId === state.activeMapBranch) {
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow');
      btn.classList.remove('bg-white', 'text-slate-700');
    } else {
      btn.classList.remove('bg-indigo-600', 'text-white', 'shadow');
      btn.classList.add('bg-white', 'text-slate-700');
    }
  });

  lucide.createIcons();
}

// Filter helpers
window.setCategoryFilter = function(cat) {
  state.activeCategory = cat;
  renderCategoryFilterPills();
  renderProducts();
};

window.setBranchFilter = function(branchId) {
  state.activeBranch = branchId;
  document.querySelectorAll('.branch-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-branch') === branchId) {
      btn.classList.add('bg-indigo-600', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-700');
    } else {
      btn.classList.remove('bg-indigo-600', 'text-white');
      btn.classList.add('bg-slate-100', 'text-slate-700');
    }
  });
  renderProducts();
};

window.setMapBranch = function(branchId) {
  state.activeMapBranch = branchId;
  renderMap();
};

window.setGalleryFilter = function(cat) {
  state.activeGalleryCategory = cat;
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-category') === cat) {
      btn.classList.add('bg-indigo-600', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');
    } else {
      btn.classList.remove('bg-indigo-600', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700');
    }
  });
  renderGallery();
};

window.resetFilters = function() {
  state.activeCategory = 'All';
  state.activeBranch = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) searchInput.value = '';
  renderCategoryFilterPills();
  setBranchFilter('all');
  renderProducts();
};

// Cart / Inquiry Management
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('avf_inquiry_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    state.cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('avf_inquiry_cart', JSON.stringify(state.cart));
  } catch (e) {}
  updateCartBadge();
}

window.addToCart = function(productId) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: prod.id,
      title: prod.title,
      sku: prod.sku,
      price: prod.price,
      image: prod.image,
      qty: 1
    });
  }

  saveCartToStorage();
  showToast(`Added "${prod.title.slice(0, 24)}..." to inquiry list!`);
};

window.updateCartQty = function(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }
  saveCartToStorage();
  renderCartDrawer();
};

window.removeFromCart = function(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCartToStorage();
  renderCartDrawer();
};

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = totalCount;
    if (totalCount > 0) {
      b.classList.remove('hidden');
      b.classList.add('cart-updated');
      setTimeout(() => b.classList.remove('cart-updated'), 350);
    } else {
      b.classList.add('hidden');
    }
  });
}

// Cart Drawer / Modal
window.openCartDrawer = function() {
  renderCartDrawer();
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.remove('translate-x-full');
  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.classList.remove('hidden');
};

window.closeCartDrawer = function() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.add('translate-x-full');
  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.classList.add('hidden');
};

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-items-container');
  const totalAmountEl = document.getElementById('cart-total-amount');
  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-16 text-center text-slate-400">
        <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 opacity-40"></i>
        <p class="text-sm font-medium">Your inquiry list is empty</p>
        <p class="text-xs text-slate-400 mt-1">Browse our products and click "Add to List".</p>
      </div>
    `;
    if (totalAmountEl) totalAmountEl.textContent = '₹0';
    lucide.createIcons();
    return;
  }

  const total = state.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  if (totalAmountEl) totalAmountEl.textContent = `₹${total.toLocaleString('en-IN')}`;

  itemsContainer.innerHTML = state.cart.map(item => {
    return `
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <img src="${item.image}" alt="${item.title}" class="w-14 h-14 object-cover rounded-lg bg-white p-1 border border-slate-100" />
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-slate-800 truncate">${item.title}</h4>
          <span class="text-[11px] text-slate-400">SKU: ${item.sku}</span>
          <div class="text-xs font-bold text-indigo-600 mt-0.5">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
            <button onclick="updateCartQty('${item.id}', -1)" class="px-2 py-1 text-slate-600 hover:bg-slate-100 text-xs font-bold">-</button>
            <span class="px-2 py-1 text-xs font-bold text-slate-800">${item.qty}</span>
            <button onclick="updateCartQty('${item.id}', 1)" class="px-2 py-1 text-slate-600 hover:bg-slate-100 text-xs font-bold">+</button>
          </div>
          <button onclick="removeFromCart('${item.id}')" class="text-rose-500 hover:text-rose-700 p-1" title="Remove item">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Generate & Send WhatsApp Inquiry
window.sendWhatsAppInquiry = function() {
  if (state.cart.length === 0) {
    alert('Please add at least one product to your inquiry list.');
    return;
  }

  const branchChoice = document.getElementById('cart-branch-select')?.value || 'delhi-branch';
  const targetBranch = state.branches.find(b => b.id === branchChoice) || state.branches[0];
  const targetPhone = targetBranch?.whatsapp || state.settings.primary_whatsapp || '919452352700';

  const customerName = document.getElementById('inquiry-name')?.value.trim() || 'Valued Customer';
  const customerCity = document.getElementById('inquiry-city')?.value.trim() || targetBranch?.city || '';

  let message = `*Namaste Asian Computers & Asian Video Films!* 🛍️\n\n`;
  message += `I would like to inquire about the following items:\n\n`;

  let total = 0;
  state.cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    message += `${index + 1}. *${item.title}*\n   • SKU: ${item.sku}\n   • Qty: ${item.qty} x ₹${item.price.toLocaleString('en-IN')} = ₹${itemTotal.toLocaleString('en-IN')}\n\n`;
  });

  message += `💰 *Total Estimated Price:* ₹${total.toLocaleString('en-IN')}\n`;
  message += `📍 *Preferred Branch:* ${targetBranch.name} (${targetBranch.city})\n`;
  message += `👤 *Customer Name:* ${customerName}\n`;
  if (customerCity) message += `🏡 *Location:* ${customerCity}\n\n`;
  message += `Please confirm product stock availability, delivery/pickup options, and current discount. Thank you!`;

  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
};

// Modals: Product Details Modal
window.openProductModal = function(productId) {
  const p = state.products.find(prod => prod.id === productId);
  if (!p) return;

  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-modal-content');
  if (!modal || !content) return;

  const discount = p.mrp && p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
  const branchLabel = p.branches.includes('both') 
    ? 'Available at Delhi & Ambedkar Nagar' 
    : p.branches.includes('delhi-branch') ? 'Delhi Branch Stock' : 'Ambedkar Nagar Stock';

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div class="bg-slate-50 rounded-2xl p-6 flex items-center justify-center border border-slate-200">
        <img src="${p.image}" alt="${p.title}" class="max-h-72 max-w-full object-contain" />
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">${p.category}</span>
            ${p.badge ? `<span class="text-xs font-bold bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full">${p.badge}</span>` : ''}
          </div>

          <h3 class="text-xl font-bold font-heading text-slate-900 mb-2 leading-tight">${p.title}</h3>
          <p class="text-xs text-slate-400 mb-3 font-mono">SKU: ${p.sku}</p>

          <div class="flex items-baseline gap-3 mb-4">
            <span class="text-2xl font-black text-slate-950 font-heading">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.mrp ? `<span class="text-sm text-slate-400 line-through">₹${p.mrp.toLocaleString('en-IN')}</span>` : ''}
            ${discount > 0 ? `<span class="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">${discount}% Savings</span>` : ''}
          </div>

          <p class="text-xs md:text-sm text-slate-600 mb-4 leading-relaxed">${p.short_desc}</p>

          <div class="mb-4">
            <span class="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">Specifications</span>
            <ul class="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              ${p.specs.map(spec => `
                <li class="flex items-start gap-1.5">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"></i>
                  <span>${spec}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="text-xs text-slate-600 mb-6 flex items-center gap-2 bg-slate-100 p-2.5 rounded-lg">
            <i data-lucide="map-pin" class="w-4 h-4 text-indigo-600 shrink-0"></i>
            <span>${branchLabel}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
          <button onclick="addToCart('${p.id}'); closeProductModal();" class="px-4 py-2.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl transition-all flex items-center justify-center gap-1.5">
            <i data-lucide="plus" class="w-4 h-4"></i> Add to Inquiry List
          </button>
          <a href="https://wa.me/${state.settings.primary_whatsapp || '919452352700'}?text=${encodeURIComponent(`Hello Asian Computers & Video Films! I want to inquire about: ${p.title} (SKU: ${p.sku}) for ₹${p.price.toLocaleString('en-IN')}`)}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5">
            <i data-lucide="message-circle" class="w-4 h-4"></i> Inquire via WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
};

window.closeProductModal = function() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.add('hidden');
};

// Modals: Service Details Modal
window.openServiceModal = function(serviceId) {
  const s = state.services.find(serv => serv.id === serviceId);
  if (!s) return;

  const modal = document.getElementById('service-modal');
  const content = document.getElementById('service-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="p-6">
      <div class="relative h-48 rounded-xl overflow-hidden mb-5">
        <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <span class="text-xs font-bold text-amber-400 uppercase tracking-wider block">${s.category}</span>
          <h3 class="text-xl font-bold font-heading text-white">${s.title}</h3>
        </div>
      </div>

      <div class="mb-4">
        <span class="text-sm font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 inline-block mb-3">
          ${s.starting_price}
        </span>
        <p class="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">${s.short_desc}</p>
      </div>

      <div class="mb-6">
        <span class="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">Package Inclusions & Deliverables</span>
        <ul class="space-y-2 text-xs md:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
          ${s.deliverables.map(deliv => `
            <li class="flex items-start gap-2">
              <i data-lucide="check" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"></i>
              <span>${deliv}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 border-t border-slate-100 flex gap-3">
        <button onclick="closeServiceModal()" class="flex-1 px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
          Close
        </button>
        <a href="https://wa.me/${state.settings.primary_whatsapp || '919452352700'}?text=${encodeURIComponent(`Hello Asian Computers & Video Films! I would like to book an appointment / discuss: ${s.title} (${s.starting_price})`)}" target="_blank" rel="noopener noreferrer" class="flex-1 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5">
          <i data-lucide="calendar" class="w-4 h-4"></i> Book via WhatsApp
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
};

window.closeServiceModal = function() {
  const modal = document.getElementById('service-modal');
  if (modal) modal.classList.add('hidden');
};

// Lightbox Modal
window.openLightbox = function(imgSrc, title, caption) {
  const modal = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');
  if (!modal || !imgEl) return;

  imgEl.src = imgSrc;
  if (titleEl) titleEl.textContent = title;
  if (captionEl) captionEl.textContent = caption || '';

  modal.classList.remove('hidden');
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.add('hidden');
};

// Toast notification
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
  }, 2500);
}

// Event Listeners Initialization
function initEventListeners() {
  // Product Search input
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('product-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close modals on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeServiceModal();
      closeLightbox();
      closeCartDrawer();
    }
  });
}
