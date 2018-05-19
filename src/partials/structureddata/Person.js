import React from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';

const conf = getConfig().publicRuntimeConfig;

function Person(props) {
  function getSocialNetworkLinks(networks) {
    let snl = [];
    if (networks.instagram) {
      snl.push(networks.instagram);
    }
    if (networks.linkedin) {
      snl.push(networks.linkedin);
    }
    if (networks.facebook) {
      snl.push(networks.facebook);
    }
    if (networks.twitter) {
      snl.push(networks.twitter);
    }
    if (networks.github) {
      snl.push(networks.github);
    }
    return snl;
  }

  let script = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    name: props.metadata.firstName + ' ' + props.metadata.lastName,
    url: conf.websiteUrl,
    logo: conf.websiteUrl + '/static/images/profile-default.png',
    sameAs: getSocialNetworkLinks(props.metadata.social)
  };

  return <script type="application/ld+json">{JSON.stringify(script)}</script>;
}

Person.propTypes = {
  metadata: PropTypes.object.isRequired
};

export default Person;
