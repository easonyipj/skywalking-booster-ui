/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export enum MetricQueryTypes {
  ReadMetricsValue = "readMetricsValue",
  ReadMetricsValues = "readMetricsValues",
  SortMetrics = "sortMetrics",
  ReadLabeledMetricsValues = "readLabeledMetricsValues",
  READHEATMAP = "readHeatMap",
  ReadSampledRecords = "readSampledRecords",
}

export enum Calculations {
  Percentage = "percentage",
  ByteToKB = "byteToKB",
  ByteToMB = "byteToMB",
  ByteToGB = "byteToGB",
  NanoToMill = "nanoToMill",
  Apdex = "apdex",
  Precision = "precision",
  ConvertSeconds = "convertSeconds",
  ConvertMilliseconds = "convertMilliseconds",
  MsToS = "msTos",
  Average = "average",
  PercentageAvg = "percentageAvg",
  ApdexAvg = "apdexAvg",
  SecondToDay = "secondToDay",
  NanosecondToMillisecond = "nanosecondToMillisecond",
}
export enum sizeEnum {
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
  XXL = "XXL",
}

export enum screenEnum {
  XS = 480,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1600,
}

export const screenMap = new Map<sizeEnum, number>();

screenMap.set(sizeEnum.XS, screenEnum.XS);
screenMap.set(sizeEnum.SM, screenEnum.SM);
screenMap.set(sizeEnum.MD, screenEnum.MD);
screenMap.set(sizeEnum.LG, screenEnum.LG);
screenMap.set(sizeEnum.XL, screenEnum.XL);
screenMap.set(sizeEnum.XXL, screenEnum.XXL);

export const RespFields: any = {
  readMetricsValues: `{
    label
    values {
      values {value}
    }
  }`,
  readMetricsValue: "",
  sortMetrics: `{
    name
    id
    value
    refId
  }`,
  readLabeledMetricsValues: `{
    label
    values {
      values {value}
    }
  }`,
  readHeatMap: `{
    values {
      id
      values
    }
    buckets {
      min
      max
    }
  }`,
  readSampledRecords: `{
    name
    value
    refId
  }`,
};
