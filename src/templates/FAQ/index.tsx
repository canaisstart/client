import Image from 'next/image'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import Link from 'next/link'

import * as S from './styles'

const AboutUs = () => (
  <Base>
    <S.Cover>
      <Image src="/img/bg01.png" alt="Home background" layout="fill" />
    </S.Cover>

    <S.Heading>Dúvidas Frequentes</S.Heading>

    <S.SectionNews>
      <Container>
        <S.Accordion>
          <Accordion allowZeroExpanded preExpanded={['a']}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>O que é a Escola START?</strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can contact a school by filling out a{' '}
                  <Link href="/contact-us">
                    <a>“Contact Us”</a>
                  </Link>{' '}
                  form. This form can be found to the right of both the
                  institute and education program profiles and also at the
                  bottom of these profiles.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>
                    Por que e por quanto tempo tenho acesso ao conteúdo?
                  </strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can contact a school by filling out a{' '}
                  <Link href="/contact-us">
                    <a>“Contact Us”</a>
                  </Link>{' '}
                  form. This form can be found to the right of both the
                  institute and education program profiles and also at the
                  bottom of these profiles.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>
                    São quantas horas de conteúdo? Tem certificado?
                  </strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can contact a school by filling out a{' '}
                  <Link href="/contact-us">
                    <a>“Contact Us”</a>
                  </Link>{' '}
                  form. This form can be found to the right of both the
                  institute and education program profiles and also at the
                  bottom of these profiles.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>Como funciona o pagamento?</strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can contact a school by filling out a{' '}
                  <Link href="/contact-us">
                    <a>“Contact Us”</a>
                  </Link>{' '}
                  form. This form can be found to the right of both the
                  institute and education program profiles and also at the
                  bottom of these profiles.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>Posso fazer mais de 1 curso ao mesmo tempo?</strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can contact a school by filling out a{' '}
                  <Link href="/contact-us">
                    <a>“Contact Us”</a>
                  </Link>{' '}
                  form. This form can be found to the right of both the
                  institute and education program profiles and also at the
                  bottom of these profiles.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>
                    Qual o prazo tenho para solicitar reembolso após a compra do
                    meu curso?
                  </strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can contact a school by filling out a{' '}
                  <Link href="/contact-us">
                    <a>“Contact Us”</a>
                  </Link>{' '}
                  form. This form can be found to the right of both the
                  institute and education program profiles and also at the
                  bottom of these profiles.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </S.Accordion>
      </Container>
    </S.SectionNews>
  </Base>
)

export default AboutUs
