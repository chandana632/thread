import React from "react";
import Style from "./FilterComponent.module.css";
import { Checkbox, FormGroup, FormControlLabel, Button } from "@mui/material";

function FilterComponent() {
  return (
    <div className={Style.filterContainer}>
      <label className={Style.filterContainerHeader}>Filter Options</label>
      <div className={Style.filterVariant}>
        <div className={Style.filterCategories}>
          <label className={Style.categoryHeader}>By Categories</label>
          <div className={Style.CategoryList}>
            <label className={Style.categorylabel}>Blouse</label>
            <label className={Style.categorylabel}>Lehenga</label>
            <label className={Style.categorylabel}>Saree</label>
          </div>
        </div>
        <div className={Style.filterCategories}>
          <label className={Style.categoryHeader}>By Price</label>
          <div className={Style.CategoryList}>
            <FormGroup>
              <FormControlLabel
                className={Style.categorylabel}
                control={<Checkbox />}
                label="Below ₹1000"
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "var(--font-size-text-large)",
                    fontFamily: "Times New Roman",
                    paddingLeft: "8px",
                  },
                }}
              />
              <FormControlLabel
                className={Style.categorylabel}
                control={<Checkbox />}
                label="₹1000 - ₹2000"
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "var(--font-size-text-large)",
                    fontFamily: "Times New Roman",
                  },
                }}
              />{" "}
              <FormControlLabel
                className={Style.categorylabel}
                control={<Checkbox />}
                label="₹2000 - ₹3000"
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "var(--font-size-text-large)",
                    fontFamily: "Times New Roman",
                  },
                }}
              />
              <FormControlLabel
                className={Style.categorylabel}
                control={<Checkbox />}
                label="₹3000 - ₹4000"
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "var(--font-size-text-large)",
                    fontFamily: "Times New Roman",
                  },
                }}
              />
              <FormControlLabel
                className={Style.categorylabel}
                control={<Checkbox />}
                label="₹4000 - ₹5000"
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "var(--font-size-text-large)",
                    fontFamily: "Times New Roman",
                  },
                }}
              />
              <FormControlLabel
                className={Style.categorylabel}
                control={<Checkbox />}
                label="Above ₹5000"
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "var(--font-size-text-large)",
                    fontFamily: "Times New Roman",
                    paddingLeft: "8px",
                  },
                }}
              />
            </FormGroup>
          </div>
        </div>
        <div className={Style.filterCategories}>
          <label className={Style.categoryHeader}>By Promotions</label>
          <div className={Style.CategoryList}>
            <label className={Style.categorylabel}>New Arrivals</label>
            <label className={Style.categorylabel}>Top Rated</label>
          </div>
        </div>
        <div className={Style.filterCategories}>
          <label className={Style.categoryHeader}>By Ocassion</label>
          <div className={Style.CategoryList}>
            <label className={Style.categorylabel}>Festive</label>
            <label className={Style.categorylabel}>Party</label>
            <label className={Style.categorylabel}>Wedding</label>
          </div>
        </div>
        <div className={Style.categoryHeader}>
          <Button variant="contained" className={Style.applyButton}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
