import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello() {
        return {
            submitter: 'Chirag Chhajed',
            description:
                'A simple API to manage players and their scores in a inmemory database',
            github: 'https://github.com/chirag-chhajed/assignment',
            postman:
                'https://www.postman.com/chirag-chhajed/workspace/publics/folder/24462005-ef1b19dc-c8af-43d9-8ff5-b1e36a5262f2?action=share&creator=24462005&ctx=documentation',
        };
    }
}
