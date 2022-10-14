class DealRequest {
  constructor({setLoading,cancelLoading,requestData,setData,setError}) {
    // this.setLoading = setLoading;
    // this.cancelLoading = cancelLoading;
    this.requestData = requestData;
    // this.setData = setData;
    // this.setError = setError;
  }

  setLoading() {
    this.loading = true;
  }

  cancelLoading() {
    this.loading = false;
  }

  requestData(){
    throw new Error('需要子类实现')
  }



  setError() {
    console.log('错误处理', error);

    // throw new Error('需要子类实现')
  }

  async init() {
    this.setLoading();
    try {
       await this.requestData();
    } catch (error) {
      this.setError(error);
    }finally{
      this.cancelLoading();
    }
  }

}

export default DealRequest;