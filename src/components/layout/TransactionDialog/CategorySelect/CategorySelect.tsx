import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/Select/Select";
import { getCategoriesList } from "@/common/configs/categoriesList";
import styles from "./CategorySelect.module.scss";

interface CategorySelectProps {
  children: React.ReactNode;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ children }) => {
  const categoriesList = getCategoriesList();
  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger} asChild>
        {children}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categoriesList.map((category, index) => (
            <SelectItem value={category} key={index}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;
