import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import TopNav from "../components/navBar";

export default function LegalGlossary() {
  return (
    <>
      <TopNav />
      <Container className="pt-3 p-4">
        <Row xs={1} md={1} lg={1} className="pt-2 pb-2">
          <Col className="text-center">
            <h2>Personal Injury Glossary</h2>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h5>Status of Limitations</h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  The statute of limitations is essentially how long you have to
                  file an injury claim against the at-fault person, business, or
                  insurance company. For example, the state of Texas has a
                  statute of limitations of three (3) years on most injury
                  claims. If you are getting close to three (3) years from your
                  injury and are still hurting, you need to find a personal
                  injury attorney like The Rey Diaz. Your attorney will be able
                  to file your case with your county’s court system so that you
                  can continue treatment and still receive a settlement for your
                  ongoing injuries.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <h5>PIP</h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="text-left">
                    Personal Injury Protection (PIP) is very useful to you
                    should you ever get into a motor vehicle accident. However,
                    PIP is not required in Washington State. When you first sign
                    up for car insurance your insurance agent should ask if you
                    would like PIP added to your policy. If you reject, you will
                    have to sign a waiver form (if they do not ask and you do
                    not sign a PIP waiver, you automatically have PIP on your
                    policy). PIP can be used whether or not you are at fault for
                    the accident. If you are a pedestrian or bicyclist who is
                    hit by a motor vehicle, the at-fault driver’s PIP will also
                    cover you.
                    <br />
                    <br /> Here are just a few of the injury-related bills that
                    PIP will pay for: Hospital visits, Urgent care or clinic
                    visits, Radiology Chiropractic, physical therapy, and
                    massage visits Time loss if you are unable to work Household
                    help if you are unable to complete chores around the house.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <h5>UIM Claim</h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p className="text-left">
                    Underinsured Motorist coverage (UIM) is another car
                    insurance policy addition that is useful in a motor vehicle
                    accident. All insurance policies have limits, which is the
                    most the insurance company will pay out. If the at-fault
                    driver’s insurance limits do not cover all your medical
                    bills, then a UIM claim will be opened with your insurance.
                    Once the claim is open, your attorney will send a demand to
                    the insurance adjuster and hopefully receive a settlement
                    without the need to file a lawsuit. It is essentially the
                    same as a liability or UM claim. Many insurance adjusters
                    and policies use UIM and UM interchangeably; however, it’s
                    good to know the difference between the two. A UIM claim
                    will only be opened if your liability claim settles but
                    doesn’t cover all of your expenses. A UM claim will only be
                    opened if the at-fault driver has no insurance.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <h5>Contingency Fee</h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p className="text-left">
                    A contingency fee is the money your personal injury attorney
                    receives only after your case settles. This fee is a usually
                    a percentage of your settlement and can be found in your
                    contract. Contingency fees are very common in personal
                    injury cases and sometimes fluctuate percentages based on
                    whether or not the attorney will have to file a lawsuit.
                    Always make sure you know whether or not your attorney works
                    on a contingency fee basis.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <h5>Liability</h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <p className="text-left">
                    Liability is a term used to describe responsibility for
                    something. For example, the driver that caused a motor
                    vehicle accident is liable for the accident. In Washington
                    State, liability for an accident can be split when no one is
                    sure who caused the accident.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <h5>UM Clain</h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <p className="text-left">
                    Uninsured Motorist coverage (UM) is a car insurance policy
                    addition that can help you in a motor vehicle accident. If
                    the at-fault driver does not have any insurance, you would
                    be unable to file a liability claim to receive a settlement.
                    However, if you added UM to your own policy, you can open a
                    UM claim to receive compensation for your injuries. A UM
                    claim works the same way a UIM or liability claim works.
                    Your attorney will send a demand to your insurance adjuster
                    and hopefully obtain settlement without filing a lawsuit.
                    Many insurance adjusters and policies use UM and UIM
                    interchangeably; however, it’s good to know the difference
                    between the two. A UM claim will only be opened if the
                    at-fault driver has no insurance. A UIM claim will only be
                    opened if your liability claim settles but doesn’t cover all
                    of your expenses.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Row>
        <Row className="w-100 h-50" xs={1} md={1} lg={1}>
          <Col className="h-100">
            <p className="text-muted text-center mt-3" style={{ fontSize: 10 }}>
              San Antonio Website Design by
              <a
                target="__blank"
                href="https://www.j12designs.com"
                rel="noreferr noopener"
                style={{
                  textDecoration: "none",
                  color: "#2f2f2f",
                  paddingLeft: 3,
                }}
              >
                J12 Designs
              </a>{" "}
            </p>
          </Col>
        </Row>{" "}
      </Container>
    </>
  );
}
