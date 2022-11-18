import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import PerfilPage from './pages/PerfilPage';
import ChatsPage from './pages/ChatsPage';
import SimpleChatPage from './pages/SimpleChatPage';
import PostPage from './pages/PostPage';
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
    { path: '/', component: HomePage, name: 'Inicio', hideHeader: true, },
    { path: '/login', component: LoginPage, name: 'Login' },
    { path: '/create-post', component: CreatePostPage, name: 'Crear publicación' },
    { path: '/perfil', component: PerfilPage, name: 'Perfil', hideHeader: true},
    { path: '/chats', component: ChatsPage, name: 'Chats'},
    { path: '/simple-chat', component: SimpleChatPage, name: 'Chat', hideHeader: true},
    { path: '/post', component: PostPage, name: 'Publicación'},
    { path: '*', component: NotFoundPage, name: '404', },
];

export default routes;