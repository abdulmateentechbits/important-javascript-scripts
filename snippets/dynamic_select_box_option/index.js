import { todoOptions } from "../../utils/select_box_options/index.js";
    console.log("Todo: ", todoOptions);

    document.addEventListener("DOMContentLoaded", () => {
      const typeSelectBox = document.querySelector("#type");
      
      todoOptions?.leadTypes.forEach((todoOption) => {
        const createOptionElement = document.createElement("option");
        createOptionElement.value = todoOption;
        createOptionElement.label = todoOption[0].toUpperCase() + todoOption.slice(1);
        typeSelectBox.appendChild(createOptionElement);
      });
      
    });

    function getTypeVal(val){
      console.log(val);
    }




    // Set the sub type select options when parent value is change accordingly
    // const getTypeValue = (e) => {
    //   const typeValue = e.target.value;
    //   const childOptions = todoOptions[typeValue];
    //   var childSelect = document.getElementById("select-field-2");
    //   childSelect.innerHTML = "";

    //   childOptions.forEach((childOption) => {
    //     let createOptionElement = document.createElement("option");
    //     createOptionElement.value = childOption;
    //     createOptionElement.label = childOption;
    //     childSelect.appendChild(createOptionElement);
    //   });
    // };