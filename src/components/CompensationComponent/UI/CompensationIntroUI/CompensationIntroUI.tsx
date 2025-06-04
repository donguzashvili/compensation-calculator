import React from "react";
import { TextView } from "@/UI";
import classes from "./CompensationIntroUI.module.scss";
import { CalculatorDummyImg } from "@/assets";

// ** this is static component so lets cache this to avoid rerenders of this component no matter what
const ComopensationIntroUI = React.memo(() => {
  return (
    <div className={classes.compensationIntro}>
      <div className={classes.compensationIntro_intro}>
        <TextView tag="h1" type="title1" weight={700}>
          Quam Tristique Condimentum
        </TextView>
        <TextView tag="p">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.{" "}
          <TextView color="red">Curabitur blandit</TextView> tempus porttitor. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.
        </TextView>
      </div>
      <div className={classes.compensationIntro_description}>
        <div className={classes.listContainer}>
          <TextView tag="h2" type="title2" weight={700}>
            Fringilla Euismod Adipiscing Ipsum
          </TextView>
          <TextView tag="p">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus
            mollis interdum. Aenean lacinia bibendum nulla sed.
          </TextView>
          <ul className={classes.list}>
            <TextView tag="li">
              <TextView tag="p">Tellus Ullamcorper Inceptos</TextView>
            </TextView>
            <TextView tag="li">
              <TextView tag="p">Magna Condimentum</TextView>
              <ul className={classes.innerList}>
                <TextView tag="li">
                  <TextView tag="p">Mattis Tristique</TextView>
                </TextView>
                <TextView tag="li">
                  <TextView tag="p">Pharetra Pellentesque Dapibus</TextView>
                </TextView>
              </ul>
            </TextView>
            <TextView tag="li">
              <TextView tag="p">enean Inceptos</TextView>
            </TextView>
            <TextView tag="li">
              <TextView tag="p">Parturient Bibendum</TextView>
            </TextView>
          </ul>
        </div>
        <img src={CalculatorDummyImg} alt="dummy image" />
      </div>
    </div>
  );
});

export default ComopensationIntroUI;
