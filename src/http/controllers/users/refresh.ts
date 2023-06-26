import { FastifyRequest, FastifyReply } from 'fastify';

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify({ onlyCookie: true });

  const userID = request.user.sub;

  const token = await reply.jwtSign(
    {},
    {
      sign: {
        sub: userID,
      },
    },
  );

  const refreshToken = await reply.jwtSign(
    {},
    {
      sign: {
        sub: userID,
        expiresIn: '7d',
      },
    },
  );

  return reply
    .setCookie('refreshToken', refreshToken, {
      path: '/', // em todo o site
      secure: true, // somente https
      sameSite: true, // somente no mesmo site
      httpOnly: true, // não deixa disponivel no frontend
    })
    .status(200)
    .send({ token });
}
