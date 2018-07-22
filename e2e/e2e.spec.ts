import { request } from './http-friend';
import './mock-server';

describe('E2E tests', () => {
  describe('when checking if the server is up', () => {
    it('if ping it pongs', (done) => {
      request({
        method: 'GET',
        url: 'http://localhost:3476/ping',
      }).then((response: any) => {
        expect(response.status).toBe(200);
        expect(response.data).toBe('pong');

        done();
      });
    });
  });

  describe('when reaching routes', () => {
    describe('when the router wasnt found', () => {
      it('returns 404 custom error', (done) => {
        request({
          method: 'GET',
          url: 'http://localhost:3476/non-exiting-route',
        }).then((response: any) => {
          const { data } = response;

          expect(data).toBeTruthy();
          expect(data.code).toBe(404);
          expect(data.type).toBe('NotFound');
          expect(data.error).toBe('Not found.');

          done();
        });
      });
    });

    describe('when the error is internal', () => {
      it('returns 500 without leaks', (done) => {
        request({
          method: 'GET',
          url: 'http://localhost:3476/internal-error',
        }).then((response: any) => {
          const { data } = response;

          expect(data).toBeTruthy();
          expect(data.code).toBe(500);
          expect(data.type).toBe('InternalError');
          expect(data.error).toBe('An error occurred. Please try again later.');

          done();
        });
      });
    });

    describe('when using schema', () => {
      describe('with a wrong call', () => {
        it('returns 400 with validation errors', (done) => {
          request({
            method: 'GET',
            url: 'http://localhost:3476/with-schema',
          }).then((response: any) => {
            const { data } = response;

            expect(data).toBeTruthy();
            expect(data.code).toBe(400);
            expect(data.type).toBe('Validation');
            expect(data.error.id).toBeTruthy();
            expect(data.error.id.location).toEqual('query');
            expect(data.error.id.msg).toEqual('ID is wrong');
            expect(data.error.id.param).toEqual('id');

            done();
          });
        });
      });
    });
  });
});
