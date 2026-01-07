
import { _decorator, Component, Node, Label, Button } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { CONFIRM_OK_TYPE, Constants } from '../framework/constants';
import { BasePopup } from './basePopup';
const { ccclass, property } = _decorator;

@ccclass('ConfirmPopup')
export class ConfirmPopup extends BasePopup {
    
    @property(Label)
    txtContent:Label;

    @property(Button)
    btnOkie:Button;

    confirmOKType:CONFIRM_OK_TYPE;
    onEnable(){
        super.onEnable();
        this.btnOkie.node.on('click',this.touchConfirm_OK,this);

    }

    onDisable(){
        super.onDisable();
        this.btnOkie.node.off('click',this.touchConfirm_OK,this);
    }

    showConfirmPopup(content: string,_confirmOKType: CONFIRM_OK_TYPE){
        this.confirmOKType = _confirmOKType;

        this.txtContent.string = `${content}`;

        this.showPopup();
    }

    touchConfirm_OK(){
        this.lockGroup.active = true;

        clientEvent.dispatchEvent(Constants.CONFIRM_OK);

        this.hidePopup();
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
