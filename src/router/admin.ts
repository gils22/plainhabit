import DashboardView from '@/views/admin/DashboardView.vue'
import ProductsView from '@/views/admin/ProductsView.vue'
import ProductDetailView from '@/views/admin/ProductDetailView.vue'
import OrdersView from '@/views/admin/OrdersView.vue'
import CustomerView from '@/views/admin/CustomerView.vue'
import CategoryView from '@/views/admin/CategoryView.vue'
import CatalogView from '@/views/admin/CatalogView.vue'
import ReportsView from '@/views/admin/ReportsView.vue'
import SettingsView from '@/views/admin/SettingsView.vue'

export const adminRoutes = [
  { path: '/admin/dashboard', name: 'AdminDashboard', component: DashboardView },
  { path: '/admin/products', name: 'AdminProducts', component: ProductsView },
  { path: '/admin/products/:id', name: 'AdminProductDetail', component: ProductDetailView },
  { path: '/admin/orders', name: 'AdminOrders', component: OrdersView },
  { path: '/admin/customer', name: 'AdminCustomer', component: CustomerView },
  { path: '/admin/category', name: 'AdminCategory', component: CategoryView },
  { path: '/admin/catalog', name: 'AdminCatalog', component: CatalogView },
  { path: '/admin/reports', name: 'AdminReports', component: ReportsView },
  { path: '/admin/settings', name: 'AdminSettings', component: SettingsView },
]
