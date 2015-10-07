/**
 * Created by Sy Morikawa on 10/7/15.
 */
/* globals _*/
/* exported listIndustries, countyGreenJobs, jobswithKeyword, testdata*/

/**
 * Returns array of industries in data set
 * @param data GreenJobs data
 * @returns returns an array of all industries in the dataset
 */
function listIndustries(data){
  return _.uniq(_.pluck(data, 'Industry'));
}

/**
 * Creates a new array where key are County names and values for each key are number of Green Jobs in the County
 * @param data GreenJobs dataset
 * @returns Array with County as key and number of jobs as value
 */
function countyGreenJobs(data){
  return _.countBy(data,function(num){
    return num['County'];
  });
}

/**
 * Filters jobs by Job Title then plucks he job title of jobs that match the keyword.
 * @param data GreenJobs dataset
 * @param keyword String to be compared with
 * @returns Array of strings of all Job Titles containing the passed string
 */
function jobswithKeyword(data, keyword){
  var jobs = _.filter(data, function(num){ return num['Job Title'].indexOf(keyword) !== -1; });

  return _.pluck(jobs, 'Job Title');
}
