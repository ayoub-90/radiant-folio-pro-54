export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 14, label: "Projects Delivered" },
  { value: 2, label: "Industry Internships" },
  { value: 180, suffix: "+", label: "Countries Analyzed" },
  { value: 7.7, suffix: "M", label: "Accident Records Processed" },
  { value: 10000, suffix: "+", label: "Patient Records Analyzed" },
  { value: 11500, label: "Global Sales Transactions Modeled" },
  { value: 84600, label: "Pizza Sales Rows Cleaned" },
  { value: 12, suffix: "%", label: "LSTM Forecast Accuracy Gain" },
  { value: 30, prefix: "+", suffix: "%", label: "ETL Pipeline Performance Gain" },
  { value: 4, label: "Statistical Tests in Power BI" },
  { value: 47, label: "Countries in Cloud Data Platform" },
  { value: 3, label: "Cloud Architectures Designed" },
];
