import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>이용약관</Heading>
            <FooterLink href="#">개인정보처리방침</FooterLink>
            <FooterLink href="#">청소년보호정책</FooterLink>
          </Column>
          <Column>
            <Heading>인재채용</Heading>
            <FooterLink href="#">회사소개</FooterLink>
            <FooterLink href="#">채용공고</FooterLink>
          </Column>
          <Column>
            <Heading>사업제안</Heading>
            <FooterLink href="#">제휴제안</FooterLink>
            <FooterLink href="#">광고제안</FooterLink>
          </Column>
          <Column>
            <Heading>고객센터</Heading>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">1:1문의</FooterLink>
          </Column>
        </Row>
      </Container>
      <h3 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        Copyright @ 2021 1조
      </h3>
    </Box>
  );
};
export default Footer;
