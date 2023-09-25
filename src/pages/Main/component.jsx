import { restaurants } from '../../constants/mock'
import { Tabs } from '../../components/Tabs/component';

export const MainPage = () => {
    return <Tabs data={restaurants} />;
}
