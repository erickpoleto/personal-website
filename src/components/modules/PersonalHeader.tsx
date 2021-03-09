import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Grid from "../layout/grid/grid";
import Image from "../elements/illustrations/Image/image"
import Flex from "../layout/flex/flex";
import {Typography} from "../elements/typography/typography";
import {theme} from "../foundation/themes";
import SizedBox from "../layout/sizedBox/sizedBox";
import Button from "../elements/forms/buttons/primary/button";
import IconButton from "../elements/forms/buttons/icon/button";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const Background = styled(Grid) `
  background-size: contain;
  height: 100vh;
  ::after {
    content: " ";
    background: url("runes.png") center repeat;
    background-size: 200px;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
`
const MainRune = styled(Image)`
  background-size: cover;
  position: absolute;
  opacity: 0.15;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  @media ${({theme}) => theme.breakpoints.ld} {
    max-width: 650px;
    max-height: 650px;
  }
  
  @media ${({theme}) => theme.breakpoints.sm} {
    max-width: 350px;
    max-height: 350px;
  }
`

const Header = styled(Grid) `
  grid-column: 1 / span 14;
  padding: 1rem 0;
  background: ${({theme}) => theme.colors.brown800};
`

const Content = styled(Grid) `
  grid-column: 1 / span 14;
  padding: 20px;
`

const ContentText = styled(Typography)`
    background: #eaeaea;
`

const PersonalHeader : React.FC = (props) => {
    return (
        <Background
            templateColumns={"1fr 4fr 1fr"}
            smTemplateColumns={"0.2fr 10fr 0.2fr"}
            templateRows={"1fr 4fr 1fr"}
            smTemplateRows={"1fr 8fr 1fr"}
            justifyItems={"center"}
            alignItems={"center"}
        >
            <MainRune src={"rune-with-border.png"}></MainRune>
            <Flex gridColumn={"2 / 2"}
                 gridRow={"2/2"}
                 flexDirection={"column"}
                 alignItems={"center"}
            >
                <Image src={"me.svg"}
                       width={"130px"}
                       smWidth={"110px"}
                >
                </Image>
                <ContentText variant={"title"}
                            bold={"medium"}>
                    FullStack developer
                </ContentText>
                <ContentText variant={"title"}
                            bold={"medium"}>
                    Mobile engineer
                </ContentText>
                <SizedBox height={"15px"}></SizedBox>
                <Button>
                    <Typography variant={"headline2"}
                                bold={"medium"}
                                color={"white"}>
                        About me
                    </Typography>
                </Button>
                <SizedBox height={"10px"}></SizedBox>
                <Flex>
                    <IconButton>
                        <AiFillGithub size={45}></AiFillGithub>
                    </IconButton>
                    <SizedBox width={"10px"}></SizedBox>
                    <IconButton>
                        <AiFillLinkedin size={45}></AiFillLinkedin>
                    </IconButton>
                </Flex>
            </Flex>
        </Background>
    );
}

export default PersonalHeader;