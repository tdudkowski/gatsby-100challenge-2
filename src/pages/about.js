import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { FormiumForm } from '@formium/react'
import { formium } from '../lib/formium'
import { Text, Box } from "@chakra-ui/react"

const AboutPage = ({ data }) => {


    const [success, setSuccess] = React.useState(false);
    if (success) {
        return <Layout><div>Thank you! Your response has been recorded.</div></Layout>
    }


    return (
        <Layout>
            <Text as="h2">About / Contact</Text>
            <Box as="div" className="formium">
                <FormiumForm
                    data={data.formiumForm}
                    onSubmit={async (values) => {
                        // Send form values to Formium
                        await formium.submitForm('audiocore2', values);
                        setSuccess(true);
                    }}
                />
            </Box>
        </Layout>
    )
}

export default AboutPage

export const query = graphql`
  {
    formiumForm(slug: { eq: "audiocore2" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;
