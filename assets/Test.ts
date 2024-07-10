import { Label } from 'cc';
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    start() {

    }

    update(deltaTime: number) {
        let ls = this.node.getComponentsInChildren(Label)

        for (let index = 0; index < ls.length; index++) {
            const element = ls[index];

            element.string = "+-,123456789123456789123456789" + index;
            // element.string = "-1" + index;
        }
    }
}


