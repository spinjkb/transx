
export function StoreInit(res) {

  console.log('StoreInit')
  ConfigStore.addItem('destlist',res.destlist)              
  
  let blank_announce={}
  
  
       
 
  //运输计划号
  blank_announce.planno='';

  // 发货地点
  blank_announce.src_id='';
  blank_announce.src_text='';

  // 收货地点
  blank_announce.dest_id='';
  blank_announce.dest_text='';

// 货品名称
  blank_announce.goods_id='';
  blank_announce.goods_text='';

//单价
  blank_announce.price='';

//发车时间
  blank_announce.delver_datetime=null;

//联系电话
  blank_announce.contact_mobile='';

//需要车型
  blank_announce.cartype_id='';
  blank_announce.cartype_text='';

//需要车辆数
blank_announce.carnum_need=0
  
ConfigStore.addItem('announce',blank_announce)              
  

}

export function StoreRefresh(key) {
  console.log('StoreRefresh')

}
