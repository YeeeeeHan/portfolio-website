import CV from "./cv";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardHeader, Container, Stack } from "@mui/material";
import "./landing.css";
import GooglePayButton from "@google-pay/button-react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    &nbsp;&nbsp;•&nbsp;&nbsp;
  </Box>
);

export default function Landing() {
  return (
    <>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "BCR2DN4TXKDLRMB2",
            merchantName: "yh-business",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(
          paymentRequest: google.payments.api.PaymentData
        ) => {
          console.log("load payment data", paymentRequest);
          console.log("load payment data", paymentRequest.paymentMethodData);
        }}
      />
      <Container className="row" maxWidth="lg">
        <Grid container spacing={2} columns={{ xs: 2, md: 8 }}>
          <Grid item xs={2} md={4} order={{ xs: 2, md: 1 }}>
            <IntroductionCard />
            <p className="landing-body" style={{ fontSize: 18 }}>
              Based in Singapore{bull}
              Open to remote work/ relocation{bull}
              Computer Science Graduate
            </p>
            {/*<Container maxWidth="sm">*/}
            {/*    <Grid container spacing={4}>*/}
            {/*        <Grid item xs={6}>*/}
            {/*            <p className="landing-buttons" style={{fontSize: 20}}> View Personal*/}
            {/*                Projects</p>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs={6}>*/}
            {/*            <p className="landing-buttons" style={{fontSize: 20}}> View Articles</p>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Container>*/}
          </Grid>
          <Grid item xs={2} md={4} order={{ xs: 1, sm: 2 }}>
            <img className="landing-img" src={require("../documents/dp.JPG")} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export function IntroductionCard() {
  return (
    <>
      <p className="landing-header"> Hi, I'm Yee Han.</p>
      <Stack direction="row" justifyContent="center">
        <p className="landing-subtitle" style={{ fontSize: 18 }}>
          {" "}
          Backend Engineer at TikTok
        </p>
        <CV />
      </Stack>
      <p className="landing-body" style={{ fontSize: 18 }}>
        I am a <strong>Software Engineer</strong> in the Video Architecture team
        at TikTok Singapore. I graduated from Nanyang Technological University
        with a major in <strong> Computer Science</strong>. I have a passion for
        building applications with real-world impact, and am currently exploring
        use cases in the <strong> Web3 </strong> space.
      </p>
      {/*</Card>*/}
    </>
  );
}
