import React from "react";
/*
const createModal = (props) => {
    //const modal = 
}
*/
function newModal (props) {
    //const modalWindow = createModal(props)
 /*   
    <div className="modal__background">
    <div className="modal">
        <img src={props.img} alt={props.alt} />
    </div>
</div>
*/
    return {
        open() {
            console.log('opened');
        },
        close() {},
        destroy() {} 
    }    

}

export default newModal

