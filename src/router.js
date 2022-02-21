import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import ErrorUrl from './components/nav/ErrorUrl.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/teams' },
      {
        name: 'teams',
        path: '/teams',
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true
          } // /teams/t1
        ]
      }, // our-domain.com/teams => TeamsList
      {
        path: '/users',
        components: {
          default: UsersList,
          footer: UsersFooter
        }
      },
      { path: '/:notFound(.*)', component: ErrorUrl }
    ],
  });
export default router;