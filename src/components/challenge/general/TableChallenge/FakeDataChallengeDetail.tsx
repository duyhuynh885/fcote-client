import React from 'react'

/**
 * Fake data challenge detail
 *
 * Version 1.0
 *
 * Date: 30-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 30-06-2022      HuyNT2711           Create
 */
interface assignment {
  point: number
  progressTime: string
  complieTime: string
  numberTry: string
  numberSubmit: string
}

interface IDataRow {
  ranking: number
  username: {
    avatar: string
    name: string
    address: string
    organization: string
  }
  a: assignment
  b: assignment
  c: assignment
  d: assignment
  e: assignment
  f: assignment
  total: {
    point: number
    progressTime: string
    complieTime: string
    numberTry: string
  }
}
export const FakeDataChallengDetails = [
  createData({
    ranking: 1,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Tan Huy',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 2,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Van Thuan',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 3,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Tan Huy',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
    numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 4,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Van Thuan',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 5,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Tan Huy',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 6,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Van Thuan',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 7,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Tan Huy',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 8,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Van Thuan',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 9,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Tan Huy',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 10,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Van Thuan',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 11,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Tan Huy',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
  createData({
    ranking: 12,
    username: {
      avatar: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
      name: 'Nguyen Van Thuan',
      address: 'Quang Nam',
      organization: 'Fpt University',
    },
    a: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    b: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    c: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    d: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    e: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },
    f: {
      point: 100,
      progressTime: '00:07:41',
      complieTime: '0,01 s',
      numberTry: '1 try',
      numberSubmit: '1/10 submission',
    },

    total: {
      point: 730,
      progressTime: '00:56:12',
      complieTime: '0,76 s',
      numberTry: '6 tries',
    },
  }),
]
function createData({ ranking, username, a, b, c, d, e, f, total }: IDataRow): IDataRow {
  return { ranking, username, a, b, c, d, e, f, total }
}

export default function FakeDataChallengeDetail() {
  return <div>FakeDataChallengeDetail</div>
}
