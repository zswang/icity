/**
 * 城市信息
 */
export interface ICityInfo {
    /**
     * 省份
     */
    province: string;
    /**
     * 城市
     */
    city: string;
    /**
     * 区号
     */
    areaCode: string;
    /**
     * 运营商
     */
    provider: string;
}
/**
 * 解析手机号
 * @param phone 手机号
 * @return 返回手机所在城市信息
 * @example parse():base 13810570000 13820570000
  ```js
  console.log(JSON.stringify(icity.parse('13810570000')))
  // > {"province":"北京","city":"北京","areaCode":"010","provider":"中国移动"}
  console.log(JSON.stringify(icity.parse('13820570000')))
  // > {"province":"天津","city":"天津","areaCode":"022","provider":"中国移动"}
  ```
 * @example parse():base 15900940000
  ```js
  console.log(JSON.stringify(icity.parse('15900940000')))
  // > {"province":"上海","city":"上海","areaCode":"021","provider":"中国移动"}
  ```
 * @example parse():coverage
  ```js
  console.log(JSON.stringify(icity.parse()))
  // > null
  console.log(JSON.stringify(icity.parse(123)))
  // > null
  console.log(JSON.stringify(icity.parse('19900940000')))
  // > null
  ```
 */
declare function parse(phone: string): ICityInfo;
export { parse };
