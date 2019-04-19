// Mostly taken from https://github.com/shawntabrizi/substrate-collectables-workshop/

import React from 'react';
import styled from 'styled-components';

const IMAGES = {
  accessories: [
    require('kitty-avatar/assets/accessorie_1.png'),
    require('kitty-avatar/assets/accessorie_2.png'),
    require('kitty-avatar/assets/accessorie_3.png'),
    require('kitty-avatar/assets/accessorie_4.png'),
    require('kitty-avatar/assets/accessorie_5.png'),
    require('kitty-avatar/assets/accessorie_6.png'),
    require('kitty-avatar/assets/accessorie_7.png'),
    require('kitty-avatar/assets/accessorie_8.png'),
    require('kitty-avatar/assets/accessorie_9.png'),
    require('kitty-avatar/assets/accessorie_10.png'),
    require('kitty-avatar/assets/accessorie_11.png'),
    require('kitty-avatar/assets/accessorie_12.png'),
    require('kitty-avatar/assets/accessorie_13.png'),
    require('kitty-avatar/assets/accessorie_14.png'),
    require('kitty-avatar/assets/accessorie_15.png'),
    require('kitty-avatar/assets/accessorie_16.png'),
    require('kitty-avatar/assets/accessorie_17.png'),
    require('kitty-avatar/assets/accessorie_18.png'),
    require('kitty-avatar/assets/accessorie_19.png'),
    require('kitty-avatar/assets/accessorie_20.png')
  ],
  body: [
    require('kitty-avatar/assets/body_1.png'),
    require('kitty-avatar/assets/body_2.png'),
    require('kitty-avatar/assets/body_3.png'),
    require('kitty-avatar/assets/body_4.png'),
    require('kitty-avatar/assets/body_5.png'),
    require('kitty-avatar/assets/body_6.png'),
    require('kitty-avatar/assets/body_7.png'),
    require('kitty-avatar/assets/body_8.png'),
    require('kitty-avatar/assets/body_9.png'),
    require('kitty-avatar/assets/body_10.png'),
    require('kitty-avatar/assets/body_11.png'),
    require('kitty-avatar/assets/body_12.png'),
    require('kitty-avatar/assets/body_13.png'),
    require('kitty-avatar/assets/body_14.png'),
    require('kitty-avatar/assets/body_15.png')
  ],
  eyes: [
    require('kitty-avatar/assets/eyes_1.png'),
    require('kitty-avatar/assets/eyes_2.png'),
    require('kitty-avatar/assets/eyes_3.png'),
    require('kitty-avatar/assets/eyes_4.png'),
    require('kitty-avatar/assets/eyes_5.png'),
    require('kitty-avatar/assets/eyes_6.png'),
    require('kitty-avatar/assets/eyes_7.png'),
    require('kitty-avatar/assets/eyes_8.png'),
    require('kitty-avatar/assets/eyes_9.png'),
    require('kitty-avatar/assets/eyes_10.png'),
    require('kitty-avatar/assets/eyes_11.png'),
    require('kitty-avatar/assets/eyes_12.png'),
    require('kitty-avatar/assets/eyes_13.png'),
    require('kitty-avatar/assets/eyes_14.png'),
    require('kitty-avatar/assets/eyes_15.png')
  ],
  mouth: [
    require('kitty-avatar/assets/mouth_1.png'),
    require('kitty-avatar/assets/mouth_2.png'),
    require('kitty-avatar/assets/mouth_3.png'),
    require('kitty-avatar/assets/mouth_4.png'),
    require('kitty-avatar/assets/mouth_5.png'),
    require('kitty-avatar/assets/mouth_6.png'),
    require('kitty-avatar/assets/mouth_7.png'),
    require('kitty-avatar/assets/mouth_8.png'),
    require('kitty-avatar/assets/mouth_9.png'),
    require('kitty-avatar/assets/mouth_10.png')
  ],
  fur: [
    require('kitty-avatar/assets/fur_1.png'),
    require('kitty-avatar/assets/fur_2.png'),
    require('kitty-avatar/assets/fur_3.png'),
    require('kitty-avatar/assets/fur_4.png'),
    require('kitty-avatar/assets/fur_5.png'),
    require('kitty-avatar/assets/fur_6.png'),
    require('kitty-avatar/assets/fur_7.png'),
    require('kitty-avatar/assets/fur_8.png'),
    require('kitty-avatar/assets/fur_9.png'),
    require('kitty-avatar/assets/fur_10.png')
  ]
};

const OuterWrapper = styled.div`
  height: 170px;
  width: 170px;
  margin: 10px;
  flex-shrink: 0;
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 8px;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

const StyledImg = styled.img`
  height: 100%;
  position: absolute;
`;

const KittyAvatar = ({ dna, className }: { dna: ArrayLike<number>, className?: string }) => {
  const pick = (index: number, array: Array<string>) => {
    if (dna.length === 0) {
      return array[0];
    }
    return array[dna[index % dna.length] % array.length];
  };

  const cat = {
    body: pick(0, IMAGES.body),
    eyes: pick(1, IMAGES.eyes),
    accessory: pick(2, IMAGES.accessories),
    fur: pick(3, IMAGES.fur),
    mouth: pick(4, IMAGES.mouth)
  };

  return (
    <OuterWrapper className={className}>
      <Wrapper>
        <StyledImg alt='body' src={cat.body} />
        <StyledImg alt='fur' src={cat.fur} />
        <StyledImg alt='mouth' src={cat.mouth} />
        <StyledImg alt='eyes' src={cat.eyes} />
        <StyledImg alt='accessory' src={cat.accessory} />
      </Wrapper>
    </OuterWrapper>
  );
};

export default KittyAvatar;
