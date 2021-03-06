import { observable, computed } from "mobx";

class <%=storeClass%> {
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}

export default new <%=storeClass %>();