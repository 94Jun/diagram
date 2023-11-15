import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import RootStore from './RootStore';

export default function useStores(): RootStore {
    return useContext(MobXProviderContext) as RootStore;
}
