import {observable} from 'mobx'


class ObservableConfigStore {
  @observable Configs ={}


  addItem(item, value) {
     this.Configs[item]=value
  }
}


const observableConfigStore = new ObservableConfigStore()
export default observableConfigStore