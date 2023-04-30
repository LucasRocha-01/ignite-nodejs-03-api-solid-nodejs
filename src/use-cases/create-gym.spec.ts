import { expect, describe, it, beforeEach } from 'vitest';
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';
import { CreateGymUseCase } from './create-gym';

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymUseCase;

describe('Create Gyms Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymsRepository);
  });
  it('Should be able to create gyms', async () => {
    const { gym } = await sut.execute({
      title: 'gym-1',
      description: null,
      phone: null,
      latitude: -22.889226,
      longitude: -43.2937281,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
