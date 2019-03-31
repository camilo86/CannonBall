import React, { Component } from 'react';
import { Pane, Heading, Text, Icon } from 'evergreen-ui';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import faq from './faq';

class Faq extends Component {
  state = { activeQuestions: ['question-1'] };

  handleSelectQuestion = activeQuestions => {
    this.setState(prevState => ({ ...prevState, activeQuestions: activeQuestions }));
  }

  render() {
    return (
      <Pane width="100%" paddingTop={32} paddingBottom={32} paddingLeft={120} paddingRight={120} background="#F7F9FD">
        <Heading size={800} paddingBottom={32} textAlign="center">Frequently Asked Questions</Heading>
        <Accordion preExpanded={this.state.activeQuestions} allowMultipleExpanded onChange={this.handleSelectQuestion} style={{marginLeft: 24, marginRight: 24 }}>
          {faq.map(x => (
            <AccordionItem key={x.key} uuid={x.key}>
              <AccordionItemHeading>
                  <AccordionItemButton>
                      <Heading size={600} paddingBottom={4}><Icon icon={this.state.activeQuestions.indexOf(x.key) !== -1 ? "caret-down" : "caret-right"} />{x.question}</Heading>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <Pane paddingLeft={24} paddingRight={24} paddingBottom={8}>
                    <Text lineHeight="normal">{x.answer}</Text>
                  </Pane>
              </AccordionItemPanel>
          </AccordionItem>
          ))}
      </Accordion>
      </Pane>
    );
  }
}

export default Faq;
