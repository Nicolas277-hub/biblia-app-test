
import { MonthData, ReadingDay } from './types';

const generateDays = (monthIndex: number, readings: string[]): ReadingDay[] => {
  return readings.map((ref, idx) => ({
    id: `${monthIndex}-${idx + 1}`,
    day: idx + 1,
    reference: ref,
  }));
};

export const BIBLE_PLAN: MonthData[] = [
  {
    name: 'Janeiro',
    days: generateDays(0, [
      'Gen 1 e 2 Rom 1', 'Gen 3 e 4 Rom 2', 'Gen 5 e 6 Rom 3', 'Gen 7 e 8 Rom 4', 'Gen 9 e 10 Rom 5',
      'Gen 11 e 12 Rom 6', 'Gen 13 e 14 Rom 7', 'Gen 15 e 16 Rom 8', 'Gen 17 e 18 Rom 9', 'Gen 19 e 20 Rom 10',
      'Gen 21 e 22 Rom 11', 'Gen 23 e 24 Rom 12', 'Gen 25 e 26 Rom 13', 'Gen 27 e 28 Rom 14', 'Gen 29 e 30 Rom 15',
      'Gen 31 e 32 Rom 16', 'Gen 33 e 34 Mat 1', 'Gen 35 e 36 Mat 2', 'Gen 37 e 38 Mat 3', 'Gen 39 e 40 Mat 4',
      'Gen 41 e 42 Mat 5', 'Gen 43 e 44 Mat 6', 'Gen 45 e 46 Mat 7', 'Gen 47 e 48 Mat 8', 'Gen 49 e 50 Mat 9',
      'Êxodo 1 e 2 Mat 10', 'Êxodo 3 e 4 Mat 11', 'Êxodo 5 e 6 Mat 12', 'Êxodo 7 e 8 Mat 13', 'Êxodo 9 e 10 Mat 14',
      'Êxodo 11 e 12 Mat 15'
    ])
  },
  {
    name: 'Fevereiro',
    days: generateDays(1, [
      'Êxodo 13 e 14 Mat 16', 'Êxodo 15 e 16 Mat 17', 'Êxodo 17 e 18 Mat 18', 'Êxodo 19 e 20 Mat 19', 'Êxodo 21 e 22 Mat 20',
      'Êxodo 23 e 24 Mat 21', 'Êxodo 25 e 26 Mat 22', 'Êxodo 27 e 28 Mat 23', 'Êxodo 29 e 30 Mat 24', 'Êxodo 31 e 32 Mat 25',
      'Êxodo 33 e 34 Mat 26', 'Êxodo 35 e 36 Mat 27', 'Êxodo 37 e 38 Mat 28', 'Êxodo 39 e 40 Marc 1', 'Lev 1 e 2 Marc 2',
      'Lev 3 e 4 Marc 3', 'Lev 5 e 6 Marc 4', 'Lev 7 e 8 Marc 5', 'Lev 9 e 10 Marc 6', 'Lev 11 e 12 Marc 7',
      'Lev 13 Marc 8', 'Lev 14 Marc 9', 'Lev 15 e 16 Marc 10', 'Lev 17 e 18 Marc 11', 'Lev 19 e 20 Marc 12',
      'Lev 21 e 22 Marc 13', 'Lev 23 e 24 Marc 14', 'Lev 25 Marc 15'
    ])
  },
  {
    name: 'Março',
    days: generateDays(2, [
      'Lev 26 e 27 Marc 16', 'Num 1 e 2 Luc 1', 'Num 3 e 4 Luc 2', 'Num 5 e 6 Luc 3', 'Num 7 Luc 4',
      'Num 8 e 9 Luc 5', 'Num 10 e 11 Luc 6', 'Num 12 e 13 Luc 7', 'Num 14 e 15 Luc 8', 'Num 16 Luc 9',
      'Num 17 e 18 Luc 10', 'Num 19 e 20 Luc 11', 'Num 21 e 22 Luc 12', 'Num 23 e 24 Luc 13', 'Num 25 e 26 Luc 14',
      'Num 27 e 28 Luc 15', 'Num 29 e 30 Luc 16', 'Num 31 e 32 Luc 17', 'Num 33 e 34 Luc 18', 'Num 35 e 36 Luc 19',
      'Deut 1 e 2 Luc 20', 'Deut 3 e 4 Luc 21', 'Deut 5 e 6 Luc 22', 'Deut 7 e 8 Luc 23', 'Deut 9 e 10 Luc 24',
      'Deut 11 e 12 João 1', 'Deut 13 e 14 João 2', 'Deut 15 e 16 João 3', 'Deut 17 e 18 João 4', 'Deut 19 e 20 João 5',
      'Deut 21 e 22 João 6'
    ])
  },
  {
    name: 'Abril',
    days: generateDays(3, [
      'Deut 23 e 24 João 7', 'Deut 25 a 27 João 8', 'Deut 28 e 29 João 9', 'Deut 30 e 31 João 10', 'Deut 32 João 11',
      'Deut 33 e 34 João 12', 'Josué 1 e 2 João 13', 'Josué 3 e 4 João 14', 'Josué 5 e 6 João 15', 'Josué 7 e 8 João 16',
      'Josué 9 e 10 João 17', 'Josué 11 e 12 João 18', 'Josué 13 e 14 João 19', 'Josué 15 e 16 João 20', 'Josué 17 e 18 João 21',
      'Josué 19 e 20 Sl 1 a 5', 'Josué 21 e 22 Sl 6 a 8', 'Josué 23 e 24 Sl 9 e 10', 'Juízes 1 e 2 Sl 11 a 14', 'Juízes 3 e 4 Sl 15 a 17',
      'Juízes 5 e 6 Sl 18', 'Juízes 7 e 8 Sl 19 a 21', 'Juízes 9 Sl 22 a 24', 'Juízes 10 e 11 Sl 25 a 27', 'Juízes 12 e 13 Sl 28 a 30',
      'Juízes 14 e 15 Sl 31 a 33', 'Juízes 16 e 17 Sl 34 a 36', 'Juízes 18 e 19 Sl 37', 'Juízes 20 e 21 Sl 38 e 39', 'Rute 1 a 4 Sl 40 a 42'
    ])
  },
  {
    name: 'Maio',
    days: generateDays(4, [
      'I Sam 1 e 2 Sl 43 a 45', 'I Sam 3 e 4 Sl 46 a 48', 'I Sam 5 e 6 Sl 49 a 51', 'I Sam 7 e 8 Sl 52 a 55', 'I Sam 9 e 10 Sl 56 a 58',
      'I Sam 11 e 12 Sl 59 a 60', 'I Sam 13 e 14 Sl 61 a 63', 'I Sam 15 e 16 Sl 64 a 66', 'I Sam 17 Sl 67 e 68', 'I Sam 18 e 19 Sl 69 e 70',
      'I Sam 20 e 21 Sl 71 e 72', 'I Sam 22 e 23 Sl 73', 'I Sam 24 e 25 Sl 74 e 75', 'I Sam 26 e 27 Sl 76 e 77', 'I Sam 28 e 29 Sl 78',
      'I Sam 30 e 31 Sl 79 e 80', 'II Sam 1 e 2 Sl 81 e 82', 'II Sam 3 e 4 Sl 83 e 84', 'II Sam 5 e 6 Sl 85 e 86', 'II Sam 7 e 8 Sl 87 e 88',
      'II Sam 9 e 10 Sl 89', 'II Sam 11 e 12 Sl 90 e 91', 'II Sam 13 e 14 Sl 92 e 93', 'II Sam 15 e 16 Sl 94 e 95', 'II Sam 17 e 18 Sl 96 a 98',
      'II Sam 19 Sl 99 a 101', 'II Sam 20 e 21 Sl 102 a 103', 'II Sam 22 Sl 104', 'II Sam 23 e 24 Sl 105', 'I Reis 1 Sl 106', 'I Reis 2 e 3 Sl 107'
    ])
  },
  {
    name: 'Junho',
    days: generateDays(5, [
      'I Reis 4 e 5 Sl 108 e 109', 'I Reis 6 e 7 Sl 110 a 113', 'I Reis 8 Sl 114 a 118', 'Sl 119 Todo', 'I Reis 9 a 11',
      'I Reis 12 a 14', 'I Reis 15 e 16', 'I Reis 17 e 18', 'I Reis 19 e 20 Sl 120 a 125', 'I Reis 21 e 22 Sl 126 a 130',
      'II Reis 1 e 2 Sl 131 a 134', 'II Reis 3 e 4 Sl 135 e 136', 'II Reis 5 e 6 Sl 137 e 138', 'II Reis 7 e 8 Sl 139 e 140', 'II Reis 9 e 10 Sl 141 a 143',
      'II Reis 11 e 12 Sl 144 a 146', 'II Reis 13 e 14 Sl 147 a 150', 'II Reis 15 e 16 Atos 1', 'II Reis 17 Atos 2', 'II Reis 18 e 19 Atos 3',
      'II Reis 20 e 21 Atos 4', 'II Reis 22 e 23 Atos 5', 'II Reis 24 e 25 Atos 6', 'I Cron 1 Atos 7', 'I Cron 2 e 3 Atos 8',
      'I Cron 4 e 5 Atos 9', 'I Cron 6 e 7 Atos 10', 'I Cron 8 e 9 Atos 11', 'I Cron 10 e 11 Atos 12', 'I Cron 12 e 13 Atos 13'
    ])
  },
  {
    name: 'Julho',
    days: generateDays(6, [
      'I Cron 14 e 15 Atos 14', 'I Cron 16 e 17 Atos 15', 'I Cron 18 e 19 Atos 16', 'I Cron 20 e 21 Atos 17', 'I Cron 22 e 23 Atos 18',
      'I Cron 24 e 25 Atos 19', 'I Cron 26 e 27 Atos 20', 'I Cron 28 e 29 Atos 21', 'II Cron 1 e 2 Atos 22', 'II Cron 3 e 4 Atos 23',
      'II Cron 5 e 6 Atos 24', 'II Cron 7 e 8 Atos 25', 'II Cron 9 e 10 Atos 26', 'II Cron 11 e 12 Atos 27', 'II Cron 13 e 14 Atos 28',
      'II Cron 15 e 16', 'II Cron 17 e 18', 'II Cron 19 e 20', 'II Cron 21 e 22', 'II Cron 23 e 24',
      'II Cron 25 e 26', 'II Cron 27 e 28', 'II Cron 29 e 30', 'II Cron 31 e 32', 'II Cron 33 e 34',
      'II Cron 35 e 36', 'Esdras 1 e 2', 'Esdras 3 e 4', 'Esdras 5 e 6', 'Esdras 7 e 8', 'Esdras 9 e 10'
    ])
  },
  {
    name: 'Agosto',
    days: generateDays(7, [
      'Neem 1 e 2 Pv 1', 'Neem 3 e 4 Pv 2', 'Neem 5 e 6 Pv 3', 'Neem 7 Pv 4', 'Neem 8 e 9 Pv 5',
      'Neem 10 e 11 Pv 6', 'Neem 12 e 13 Pv 7', 'Ester 1 e 2 Pv 8', 'Ester 3 e 4 Pv 9', 'Ester 5 e 6 Pv 10',
      'Ester 7 e 8 Pv 11', 'Ester 9 e 10 Pv 12', 'Jó 1 e 2 Pv 13', 'Jó 3 e 4 Pv 14', 'Jó 5 e 6 Pv 15',
      'Jó 7 e 8 Pv 16', 'Jó 9 e 10 Pv 17', 'Jó 11 e 12 Pv 18', 'Jó 13 e 14 Pv 19', 'Jó 15 e 16 Pv 20',
      'Jó 17 e 18 Pv 21', 'Jó 19 e 20 Pv 22', 'Jó 21 e 22 Pv 23', 'Jó 23 a 25 Pv 24', 'Jó 26 a 28 Pv 25',
      'Jó 29 e 30 Pv 26', 'Jó 31 e 32 Pv 27', 'Jó 33 e 34 Pv 28', 'Jó 35 e 36 Pv 29', 'Jó 37 e 38 Pv 30',
      'Jó 39 e 40 Pv 31'
    ])
  },
  {
    name: 'Setembro',
    days: generateDays(8, [
      'Jó 41 e 42 I Cor 1', 'Ecles 1 e 2 I Cor 2', 'Ecles 3 e 4 I Cor 3', 'Ecles 5 e 6 I Cor 4', 'Ecles 7 e 8 I Cor 5',
      'Ecles 9 e 10 I Cor 6', 'Ecles 11 e 12 I Cor 7', 'Cantares 1 e 2 I Cor 8', 'Cantares 3 e 4 I Cor 9', 'Cantares 5 e 6 I Cor 10',
      'Cantares 7 e 8 I Cor 11', 'Isaias 1 e 2 I Cor 12', 'Isaias 3 a 5 I Cor 13', 'Isaias 6 a 8 I Cor 14', 'Isaias 9 e 10 I Cor 15',
      'Isaias 11 a 13 I Cor 16', 'Isaias 14 e 15 II Cor 1', 'Isaias 16 e 17 II Cor 2', 'Isaias 18 e 19 II Cor 3', 'Isaias 20 a 22 II Cor 4',
      'Isaias 23 e 24 II Cor 5', 'Isaias 25 e 26 II Cor 6', 'Isaias 27 e 28 II Cor 7', 'Isaias 29 e 30 II Cor 8', 'Isaias 31 e 32 II Cor 9',
      'Isaias 33 e 34 II Cor 10', 'Isaias 35 e 36 II Cor 11', 'Isaias 37 e 38 II Cor 12', 'Isaias 39 e 40 II Cor 13', 'Isaias 41 e 42 Gal 1'
    ])
  },
  {
    name: 'Outubro',
    days: generateDays(9, [
      'Isaias 43 e 44 Gal 2', 'Isaias 45 e 46 Gal 3', 'Isaias 47 e 48 Gal 4', 'Isaias 49 e 50 Gal 5', 'Isaias 51 e 52 Gal 6',
      'Isaias 53 a 55 Ef 1', 'Isaias 56 a 58 Ef 2', 'Isaias 59 e 60 Ef 3', 'Isaias 61 e 62 Ef 4', 'Isaias 63 e 64 Ef 5',
      'Isaias 65 e 66 Ef 6', 'Jer 1 e 2 Filip 1', 'Jer 3 e 4 Filip 2', 'Jer 5 e 6 Filip 3', 'Jer 7 e 8 Filip 4',
      'Jer 9 e 10 Col 1', 'Jer 11 e 12 Col 2', 'Jer 13 e 14 Col 3', 'Jer 15 e 16 Col 4', 'Jer 17 e 18 I Tes 1 e 2',
      'Jer 19 e 20 I Tes 3 e 4', 'Jer 21 e 22 I Tes 5', 'Jer 23 e 24 II Tes 1', 'Jer 25 e 26 II Tes 2', 'Jer 27 e 28 II Tes 3',
      'Jer 29 e 30 I Tim 1', 'Jer 31 e 32 I Tim 2', 'Jer 33 e 34 I Tim 3', 'Jer 35 e 36 I Tim 4', 'Jer 37 e 38 I Tim 5', 'Jer 39 e 40 I Tim 6'
    ])
  },
  {
    name: 'Novembro',
    days: generateDays(10, [
      'Jer 41 e 42 II Tim 1', 'Jer 43 e 44 II Tim 2', 'Jer 45 e 46 II Tim 3', 'Jer 47 e 48 II Tim 4', 'Jer 49 e 50 Tito 1',
      'Jer 51 e 52 Tito 2 e 3', 'Lam 1 e 2 Filemon', 'Lam 3 Heb 1', 'Lam 4 e 5 Heb 2', 'Ezeq 1 e 2 Heb 3',
      'Ezeq 3 e 4 Heb 4', 'Ezeq 5 e 6 Heb 5', 'Ezeq 7 e 8 Heb 6', 'Ezeq 9 e 10 Heb 7', 'Ezeq 11 e 12 Heb 8',
      'Ezeq 13 a 15 Heb 9', 'Ezeq 16 e 17 Heb 10', 'Ezeq 18 e 19 Heb 11', 'Ezeq 20 e 21 Heb 12', 'Ezeq 22 e 23 Heb 13',
      'Ezeq 24 a 26 Tg 1', 'Ezeq 27 e 28 Tg 2', 'Ezeq 29 a 31 Tg 3', 'Ezeq 32 e 33 Tg 4', 'Ezeq 34 e 35 Tg 5',
      'Ezeq 36 e 37 I Pe 1', 'Ezeq 38 e 39 I Pe 2', 'Ezeq 40 e 41 I Pe 3', 'Ezeq 42 e 43 I Pe 4', 'Ezeq 44 e 45 I Pe 5'
    ])
  },
  {
    name: 'Dezembro',
    days: generateDays(11, [
      'Ezeq 41 e 42 II Pe 2', 'Ezeq 43 e 44 II Pe 3', 'Ezeq 45 e 46 I João 1', 'Ezeq 47 e 48 I João 2', 'Daniel 1 e 2 I João 3',
      'Daniel 3 e 4 I João 4', 'Daniel 5 e 6 I João 5', 'Daniel 7 e 8 II João', 'Daniel 9 e 10 III João', 'Daniel 11 e 12 Ap 1',
      'Oséias 1 a 3 Ap 2', 'Oséias 4 a 6 Ap 3', 'Oséias 7 e 8 Ap 4', 'Oséias 9 a 11 Ap 5', 'Oséias 12 a 14 Ap 6',
      'Joel Apocalipse 7', 'Amós 1 a 3 Ap 8', 'Amós 4 a 6 Ap 9', 'Amós 7 a 9 Ap 10', 'Obadias Ap 11',
      'Jonas Ap 12', 'Miq 1 a 4 Ap 13', 'Miq 5 a 7 Ap 14', 'Naum Ap 15', 'Habacuque Ap 16',
      'Sofonias Ap 17', 'Ageu Ap 18', 'Zac 1 a 4 Ap 19', 'Zac 5 a 9 Ap 20', 'Zac 10 a 14 Ap 21', 'Malaquias Ap 22'
    ])
  }
];
