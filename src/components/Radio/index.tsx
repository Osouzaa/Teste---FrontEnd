import { CirclePlay, Pencil, Search, Trash } from "lucide-react";
import { RadioContainer, RadioContent, RadioHeader, RadioItem, RadioItemLeft, RadioName, SearchContainer } from "./styles";



export function Radio() {
  return (
    <RadioContainer>
      <RadioHeader>
        <h1>Radio Browser</h1>
        <SearchContainer>
          <Search size={20} />
          <span>Search stations</span>
        </SearchContainer>
      </RadioHeader>

      <RadioContent>
        <ul>
          <RadioItem>
            <RadioItemLeft>
              <CirclePlay size={24} />
              <div>
                <p>CNR-1 中国之声</p>
                <RadioName>China, news</RadioName>
              </div>
            </RadioItemLeft>
            <RadioItemLeft>
              <Pencil size={20} />
              <Trash size={20} />
            </RadioItemLeft>
          </RadioItem>
        </ul>
      </RadioContent>
    </RadioContainer>
  );
}
