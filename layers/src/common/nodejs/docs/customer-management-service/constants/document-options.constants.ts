import { execSync } from 'child_process';
import { getLatestVersionFromSpecificApp } from '../../../common/helpers/utils';

const tagName = 'CM-SVC';

export const version =
  execSync(getLatestVersionFromSpecificApp(tagName)).toString().trim() ??
  `@${tagName}v0.0.0`;

export const title = 'Customer Management Service Module';
export const description = `### CRUD for customer, companies, industries, house accounts and tax exempt management.
-----
#### 📄 Database Model: [Customers Management Service](https://sundevs.atlassian.net/wiki/spaces/TRIN/pages/1490026529/MICROSERVICE+ARCHITECTURE#6.15.1-Database-Model)
#### 🗃 Database Name: trinitip-crm-{stage}
#### ⭐️ Epic: [Customers Management Module - MVP](https://sundevs.atlassian.net/browse/TRIN-789)
#### 👩‍🚀 Postman: [Customers Management Service](https://sundevs.postman.co/workspace/Trinitip~66e3df4e-0944-4490-ae6f-52b0286fe437/folder/18642713-d4cbf76c-549d-42c0-9593-768765684e84)`;
