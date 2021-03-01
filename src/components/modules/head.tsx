import Head from "next/head";
import PropTypes from 'prop-types';

function CustomHead({ title }) {
    return (
      <Head>
          <title>
              {title}
          </title>
      </Head>
    );
}

CustomHead.propTypes = {
    title: PropTypes.string.isRequired
}

export default CustomHead;