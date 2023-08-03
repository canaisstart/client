import Image from 'next/image'
import Base from 'templates/Base'

import * as S from './styles'

const AboutUs = () => (
  <Base>
    <S.Cover>
      <Image src="/img/bg01.png" alt="Home background" layout="fill" />
    </S.Cover>

    <S.Heading>Política de Privacidade</S.Heading>

    <S.SectionNews>
      <S.Text>
        <b>
          Leia com atenção esta Políticas de Privacidade antes de comprar
          qualquer curso da Plataforma da Escola START.
        </b>
      </S.Text>

      <S.Text>
        <h2>
          <strong>1. Introdução</strong>
        </h2>
      </S.Text>

      <S.Text>
        Esta Política de Privacidade deixa claro o compromisso da Start em
        garantir a proteção dos dados pessoais de seus clientes, usuários,
        fornecedores e demais pessoas que interagem com a Plataforma Start e
        seus produtos, em quaisquer operações que envolvam o tratamento de dados
        pessoais, tais como coleta, uso, armazenamento, compartilhamento ou
        exclusão dos dados eventualmente tratados quando você se utiliza de
        nossos sites e plataforma, ou se inscreve em nossos eventos.
      </S.Text>

      <S.Text>
        A Start adota proteções e medidas para resguardar toda a informação
        imputada em seus sistemas e produtos, utilizando mecanismos de segurança
        da informação eficazes.
      </S.Text>

      <S.Text>
        A Start coleta e, em alguns casos, pode revelar informações de seus
        usuários e visitantes relativas aos dados cadastrais e registros de
        acesso ao site para terceiros, incluindo, mas não se limitando a
        parceiros comerciais, fornecedores de serviços corporativos, autoridades
        e pessoas físicas ou jurídicas para finalidades de marketing, vendas,
        estudos e análises internas, cumprimento de obrigações legais,
        regulatórias e cumprimento de decisões judiciais finalidade de realizar
        estudos internos com o objetivo de propor as iniciativas comerciais e
        promocionais da Start, de seus produtos, módulos e/ou da Plataforma
        Start como um todo.
      </S.Text>

      <S.Text>
        <h2>
          <strong>2. A quem se aplica esta política?</strong>
        </h2>
      </S.Text>

      <S.Text>
        Esta política de privacidade se aplica aos clientes, potenciais clientes
        e seus representantes, participantes de eventos, visitantes,
        fornecedores e parceiros de negócio, colaboradores e quaisquer pessoas
        que tenham acesso ao espaço digital (site) da Start. Para navegar em
        áreas restritas dos sites da Start e ter acesso a serviços exclusivos é
        necessário se cadastrar na Plataforma. A presente Política integra os
        Termos de Uso dos recursos da Plataforma Start. disponíveis em
        https://www.escolastart.plus/policies (“Termos de Uso”).
      </S.Text>

      <S.Text>
        Ao interagir com nossos sites, você também tem a capacidade de,
        eventualmente, vincular ou se conectar a sites, serviços, redes sociais,
        aplicativos ou outros recursos que não são da Start. A ativação desses
        recursos fará com que outras organizações além da Start processem
        informações sobre você e por isso recomendamos que recorra à política de
        privacidade destas organizações.
      </S.Text>
    </S.SectionNews>
  </Base>
)

export default AboutUs
