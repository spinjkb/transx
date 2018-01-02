 
import { observable, action } from "mobx";


class ObservableConfigStore {
  @observable Configs ={}


  @action addItem(item, value) {
     this.Configs[item]=value
  }

  @action setItem(item, value) {
     this.Configs[item]=value
  }



}


const observableConfigStore = new ObservableConfigStore()
export default observableConfigStore