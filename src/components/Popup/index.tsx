import React, { useState } from 'react';
import { Wrapper } from './styled';

interface Props {
}

const Popup = (props: Props) => {

    const [visible, setVisible] = useState<boolean>(true)

    return <>{visible?<Wrapper onClick={()=>setVisible(false)}>{"You can use numpad on your keyboard to type the numbers ☺"}</Wrapper>:null}</>;
};

export default Popup;
