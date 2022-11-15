import type { Branch } from '../../hooks/useSafeBoxes';

export const getCoordinates = (data?: Branch | Branch[]): number[][] => {
  if (Array.isArray(data)) {
    return data.map((_) =>
      _.gpsLatitude && _.gpsLongitude ? [_.gpsLatitude, _.gpsLongitude] : [],
    );
  }
  if (data?.gpsLatitude && data?.gpsLongitude) {
    return [[data.gpsLatitude, data.gpsLongitude]];
  }

  return [];
};

export const getBranch = (branches: Branch[], selectedBranch: string) =>
  branches.find((_) => _.branchCode === selectedBranch);
