import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/product/ProductView.vue'
import DetailProduct from '@/views/product/DetailProduct.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import CartView from '@/views/CartView.vue'
import WishlistView from '@/views/WishlistView.vue'
import CheckoutView from '@/views/CheckoutView.vue'

export const userRoutes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/product', name: 'UserProductList', component: ProductView },
  { path: '/product/:id', name: 'UserProductDetail', component: DetailProduct },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/wishlist', name: 'Wishlist', component: WishlistView },
  { path: '/checkout', name: 'Checkout', component: CheckoutView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/profile', name: 'Profile', component: ProfileView },
]
