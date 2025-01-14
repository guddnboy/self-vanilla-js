import Content from './components/content';
import TabBar from './components/tabBar';
import {request} from './components/api';

export default function App({$app}){
    this.state = {
        currentTab : 'all',
        photos : []
    }

    const tabBar = new TabBar({$app, initialState:''});
    const content = new Content({$app, initialState:[]});

    this.setState =(newState) =>{
        this.state = newState;
        tabBar.setState(this.state.currentTab);
        content.setState(this.state.photos);
    }

    const init = async () => {
        try {
            const initialPhotos = await request();
            this.setState({
                ...this.state,
                photos: initialPhotos
            });
        } catch (error) {
            console.log(error);   
        }
    }

    init();
}