declare namespace NodeJs {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    [key: string]: string;
  }
}
