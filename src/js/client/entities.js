import {schema, normalize} from 'normalizr';

const metadataEntity = new schema.Entity('metadata');

const introductionEntity = new schema.Entity('introduction');

const workEntity = new schema.Entity('work');

const educationEntity = new schema.Entity('education');

const skillEntity = new schema.Entity('skill')

const skillsetEntity = new schema.Entity('skillset', {
  skills: [ skillEntity ]
});

const projectEntity = new schema.Entity('project');

const profileEntity = new schema.Entity('profile', {
  metadata: metadataEntity,
  introduction: introductionEntity,
  education: [ educationEntity ],
  work: [ workEntity ],
  projects: [ projectEntity ],
  skillsets: [ skillsetEntity ]
});

// Entities export
export const Entities = {
  PROFILE: profileEntity
};
