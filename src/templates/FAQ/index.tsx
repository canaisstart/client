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
                  A Escola START é uma instituição de capacitação profissional
                  com o diferencial de ser uma verdadeira fábrica de educação.
                  Com uma trajetória de 8 anos, nossa missão é auxiliar
                  estudantes e trabalhadores a aprimorar suas habilidades, tanto
                  as técnicas (hard skills) quanto as habilidades sociais e
                  emocionais (soft skills).
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>Por quanto tempo tenho acesso ao conteúdo?</strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Você terá acesso completo ao conteúdo por 1 ano! Durante esse
                período, você terá a oportunidade de aprimorar suas habilidades,
                desenvolver competências , e transformar sua trajetória
                profissional e pessoal de forma significativa.
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>Tem certificado?</strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Sim, ao completar o curso online da Escola START, você será
                recompensado(a) com um certificado de conclusão. Esse
                certificado é o símbolo do seu esforço e dedicação ao longo do
                período de estudos. Ele comprova suas novas habilidades
                adquiridas.
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>Como funciona o pagamento?</strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Possuimos diversas opções de pagamento. Aceitamos boleto
                bancário, pix, além de cartões de débito e crédito. E o melhor é
                que você pode parcelar o valor do curso no cartão de crédito,
                facilitando ainda mais o acesso ao conteúdo de excelência que
                temos a oferecer.
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>Posso fazer mais de 1 curso ao mesmo tempo?</strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Sim, você tem a liberdade de ampliar seus horizontes e aprimorar
                suas habilidades em diferentes áreas. Com a possibilidade de
                fazer mais de um curso ao mesmo tempo, você pode explorar
                diversas temáticas e adquirir conhecimentos variados para
                impulsionar sua carreira e desenvolvimento pessoal. Basta
                adquirir os cursos desejados em nossa loja virtual e iniciar os
                estudos imediatamente.
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
                Conforme o Art. 49 do Código de Defesa do Consumidor, é
                assegurado ao aluno da Escola START o direito de desistir do
                contrato de curso online no prazo de 7 dias, contados a partir
                da data de assinatura do contrato ou do recebimento do acesso ao
                curso.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </S.Accordion>
      </Container>
    </S.SectionNews>
  </Base>
)

export default AboutUs
