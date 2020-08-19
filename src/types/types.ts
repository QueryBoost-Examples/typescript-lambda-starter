export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  _FieldSet: any;
};

export type Query = {
  __typename?: 'Query';
  postmark: PostmarkQuery;
  /** Entry point for the Typeform API */
  typeform?: Maybe<TypeformQuery>;
  /** Entry point for the Stripe API https://stripe.com/docs/api */
  stripe: StripeQuery;
};

export type PostmarkQuery = {
  __typename?: 'PostmarkQuery';
  /** returns a list of Delivery Statistics for the server */
  getDeliveryStats?: Maybe<PostmarkDeliveryStats>;
  /** Returns a list of bounces */
  getBounces?: Maybe<PostmarkBounces>;
  /** returns a single bounce */
  getBounce?: Maybe<PostmarkBounce>;
  /** returns a dump of a single bounce */
  getBounceDump?: Maybe<PostmarkBounceDump>;
  /** search for outbound messages */
  searchOutboundMessages?: Maybe<PostmarkOutboundMessageResults>;
  /** get outbound message details */
  getOutboundMessage?: Maybe<PostmarkOutboundMessageDetails>;
  /** get dump of outbound message */
  getOutboundMessageDump?: Maybe<PostmarkOutboundMessageDump>;
  /** search for inbound messages */
  searchInboundMessages?: Maybe<PostmarkInboundMessage>;
  /** get inbound message details */
  getInboundMessage?: Maybe<PostmarkInboundMessageDetails>;
};

export type PostmarkQueryGetBouncesArgs = {
  input: PostmarkBouncesInput;
};

export type PostmarkQueryGetBounceArgs = {
  id: Scalars['ID'];
};

export type PostmarkQueryGetBounceDumpArgs = {
  id: Scalars['ID'];
};

export type PostmarkQuerySearchOutboundMessagesArgs = {
  input: PostmarkOutboundMessageSearchInput;
};

export type PostmarkQueryGetOutboundMessageArgs = {
  id: Scalars['ID'];
};

export type PostmarkQueryGetOutboundMessageDumpArgs = {
  id: Scalars['ID'];
};

export type PostmarkQuerySearchInboundMessagesArgs = {
  input: PostmarkInboundMessageSearchInput;
};

export type PostmarkQueryGetInboundMessageArgs = {
  id: Scalars['ID'];
};

export type PostmarkDeliveryStats = {
  __typename?: 'PostmarkDeliveryStats';
  inActiveEmails?: Maybe<Scalars['Int']>;
  bounces?: Maybe<Array<Maybe<PostmarkDeliveryStatBounce>>>;
};

export type PostmarkDeliveryStatBounce = {
  __typename?: 'PostmarkDeliveryStatBounce';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<PostmarkBounceType>;
  count?: Maybe<Scalars['Int']>;
};

export enum PostmarkBounceType {
  HardBounce = 'HardBounce',
  Transient = 'Transient',
  Unsubscribe = 'Unsubscribe',
  Subscribe = 'Subscribe',
  AutoResponder = 'AutoResponder',
  AddressChange = 'AddressChange',
  DnsError = 'DnsError',
  SpamNotification = 'SpamNotification',
  OpenRelayTest = 'OpenRelayTest',
  Unknown = 'Unknown',
  SoftBounce = 'SoftBounce',
  VirusNotification = 'VirusNotification',
  ChallengeVerification = 'ChallengeVerification',
  BadEmailAddress = 'BadEmailAddress',
  SpamComplaint = 'SpamComplaint',
  ManuallyDeactivated = 'ManuallyDeactivated',
  Unconfirmed = 'Unconfirmed',
  Blocked = 'Blocked',
  SmtpApiError = 'SMTPApiError',
  InboundError = 'InboundError',
  DmarcPolicy = 'DMARCPolicy',
  TemplateRenderingFailed = 'TemplateRenderingFailed',
}

export type PostmarkBouncesInput = {
  pagination?: Maybe<PaginationInput>;
  type?: Maybe<PostmarkBounceType>;
  inactive?: Maybe<Scalars['Boolean']>;
  emailFilter?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  messageID?: Maybe<Scalars['String']>;
  fromdate?: Maybe<Scalars['String']>;
  todate?: Maybe<Scalars['String']>;
};

export type PaginationInput = {
  endingBefore?: Maybe<Scalars['String']>;
  startingAfter?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PostmarkBounces = {
  __typename?: 'PostmarkBounces';
  pageInfo?: Maybe<PageInfo>;
  bounces?: Maybe<Array<Maybe<PostmarkBounce>>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasMore?: Maybe<Scalars['Boolean']>;
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  totalRecords?: Maybe<Scalars['Int']>;
};

export type PostmarkBounce = {
  __typename?: 'PostmarkBounce';
  ID: Scalars['ID'];
  type?: Maybe<PostmarkBounceType>;
  typeCode?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  messageID?: Maybe<Scalars['String']>;
  serverID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  bouncedAt?: Maybe<Scalars['String']>;
  dumpAvailable?: Maybe<Scalars['Boolean']>;
  inactive?: Maybe<Scalars['Boolean']>;
  canActivate?: Maybe<Scalars['Boolean']>;
  subject?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PostmarkBounceBouncedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type PostmarkBounceDump = {
  __typename?: 'PostmarkBounceDump';
  body?: Maybe<Scalars['String']>;
};

export type PostmarkOutboundMessageSearchInput = {
  pagination?: Maybe<PaginationInput>;
  recipient?: Maybe<Scalars['String']>;
  fromemail?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  status?: Maybe<PostmarkMessageOutboundStatus>;
  todate?: Maybe<Scalars['String']>;
  fromdate?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  metadata_?: Maybe<Scalars['String']>;
};

export enum PostmarkMessageOutboundStatus {
  Queued = 'Queued',
  Sent = 'Sent',
  Processed = 'Processed',
}

export type PostmarkOutboundMessageResults = {
  __typename?: 'PostmarkOutboundMessageResults';
  pageInfo?: Maybe<PageInfo>;
  messages?: Maybe<Array<Maybe<PostmarkOutboundMessage>>>;
};

export type PostmarkOutboundMessage = {
  __typename?: 'PostmarkOutboundMessage';
  tag?: Maybe<Scalars['String']>;
  messageID?: Maybe<Scalars['String']>;
  to?: Maybe<Array<Maybe<PostmarkAddress>>>;
  cc?: Maybe<Array<Maybe<PostmarkAddress>>>;
  bcc?: Maybe<Array<Maybe<PostmarkAddress>>>;
  recipients?: Maybe<Array<Maybe<Scalars['String']>>>;
  from?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Maybe<PostmarkAttachment>>>;
  status?: Maybe<PostmarkMessageOutboundStatus>;
  trackOpens?: Maybe<Scalars['Boolean']>;
  trackLinks?: Maybe<PostmarkTrackLink>;
};

export type PostmarkAddress = {
  __typename?: 'PostmarkAddress';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type PostmarkAttachment = {
  __typename?: 'PostmarkAttachment';
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  contentID?: Maybe<Scalars['String']>;
};

export enum PostmarkTrackLink {
  None = 'None',
  HtmlAndText = 'HtmlAndText',
  HtmlOnly = 'HtmlOnly',
  TextOnly = 'TextOnly',
}

export type PostmarkOutboundMessageDetails = {
  __typename?: 'PostmarkOutboundMessageDetails';
  textBody?: Maybe<Scalars['String']>;
  htmlBody?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  messageID?: Maybe<Scalars['String']>;
  to?: Maybe<Array<Maybe<PostmarkAddress>>>;
  cc?: Maybe<Array<Maybe<PostmarkAddress>>>;
  bcc?: Maybe<Array<Maybe<PostmarkAddress>>>;
  recipients?: Maybe<Array<Maybe<Scalars['String']>>>;
  receivedAt?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Maybe<PostmarkAttachment>>>;
  status?: Maybe<PostmarkMessageOutboundStatus>;
  trackOpens?: Maybe<Scalars['Boolean']>;
  trackLinks?: Maybe<PostmarkTrackLink>;
  MessageEvents?: Maybe<Array<Maybe<PostmarkMessageEvent>>>;
  metadata?: Maybe<Scalars['JSON']>;
};

export type PostmarkOutboundMessageDetailsReceivedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type PostmarkMessageEvent = {
  __typename?: 'PostmarkMessageEvent';
  recipient?: Maybe<Scalars['String']>;
  type?: Maybe<PostmarkMessageEventType>;
  receivedAt?: Maybe<Scalars['String']>;
  details?: Maybe<PostmarkMessageEventDetails>;
};

export type PostmarkMessageEventReceivedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum PostmarkMessageEventType {
  Delivered = 'Delivered',
  Transient = 'Transient',
  Opened = 'Opened',
  LinkClicked = 'LinkClicked',
  Bounced = 'Bounced',
}

export type PostmarkMessageEventDetails = {
  __typename?: 'PostmarkMessageEventDetails';
  summary?: Maybe<Scalars['String']>;
  bounceID?: Maybe<Scalars['String']>;
  deliveryMessage?: Maybe<Scalars['String']>;
  destinationServer?: Maybe<Scalars['String']>;
  destinationIP?: Maybe<Scalars['String']>;
};

export type PostmarkOutboundMessageDump = {
  __typename?: 'PostmarkOutboundMessageDump';
  body?: Maybe<Scalars['String']>;
};

export type PostmarkInboundMessageSearchInput = {
  pagination?: Maybe<PaginationInput>;
  recipient?: Maybe<Scalars['String']>;
  fromemail?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  mailboxhash?: Maybe<Scalars['String']>;
  status?: Maybe<PostmarkMessageInboundStatus>;
  todate?: Maybe<Scalars['String']>;
  fromdate?: Maybe<Scalars['String']>;
};

export enum PostmarkMessageInboundStatus {
  Blocked = 'Blocked',
  Processed = 'Processed',
  Queued = 'Queued',
  Failed = 'Failed',
  Scheduled = 'Scheduled',
}

export type PostmarkInboundMessage = {
  __typename?: 'PostmarkInboundMessage';
  from?: Maybe<Scalars['String']>;
  fromName?: Maybe<Scalars['String']>;
  fromFull?: Maybe<PostmarkAddress>;
  to?: Maybe<Scalars['String']>;
  toFull?: Maybe<Array<Maybe<PostmarkAddress>>>;
  cc?: Maybe<Scalars['String']>;
  ccFull?: Maybe<Array<Maybe<PostmarkAddress>>>;
  replyTo?: Maybe<Scalars['String']>;
  originalRecipient?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  mailboxHash?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Maybe<PostmarkAttachment>>>;
  messageID?: Maybe<Scalars['String']>;
  status?: Maybe<PostmarkMessageInboundStatus>;
};

export type PostmarkInboundMessageDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type PostmarkInboundMessageDetails = {
  __typename?: 'PostmarkInboundMessageDetails';
  from?: Maybe<Scalars['String']>;
  fromName?: Maybe<Scalars['String']>;
  fromFull?: Maybe<PostmarkAddress>;
  to?: Maybe<Scalars['String']>;
  toFull?: Maybe<Array<Maybe<PostmarkAddress>>>;
  cc?: Maybe<Scalars['String']>;
  ccFull?: Maybe<Array<Maybe<PostmarkAddress>>>;
  replyTo?: Maybe<Scalars['String']>;
  originalRecipient?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  mailboxHash?: Maybe<Scalars['String']>;
  textBody?: Maybe<Scalars['String']>;
  htmlBody?: Maybe<Scalars['String']>;
  headers?: Maybe<Array<Maybe<PostmarkHeader>>>;
  tag?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Maybe<PostmarkAttachment>>>;
  messageID?: Maybe<Scalars['String']>;
  status?: Maybe<PostmarkMessageInboundStatus>;
  blockedReason?: Maybe<Scalars['String']>;
};

export type PostmarkInboundMessageDetailsDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type PostmarkHeader = {
  __typename?: 'PostmarkHeader';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TypeformQuery = {
  __typename?: 'TypeformQuery';
  /** Retrieves responses */
  responses?: Maybe<TypeformResponse>;
};

export type TypeformQueryResponsesArgs = {
  formId: Scalars['String'];
  input?: Maybe<TypeformResponseInput>;
};

export type TypeformResponseInput = {
  pagination?: Maybe<PaginationInput>;
  includedResponseIds?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TypeformResponse = {
  __typename?: 'TypeformResponse';
  formId: Scalars['String'];
  pageInfo?: Maybe<PageInfo>;
  items?: Maybe<Array<Maybe<TypeformResponseItem>>>;
};

export type TypeformResponseItem = {
  __typename?: 'TypeformResponseItem';
  responseId?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
  landedAt?: Maybe<Scalars['String']>;
  submittedAt?: Maybe<Scalars['String']>;
  metadata?: Maybe<TypeformResponseMetaData>;
  answers?: Maybe<Array<Maybe<TypeformResponseAnswer>>>;
  hidden?: Maybe<Scalars['JSON']>;
  definition?: Maybe<Array<Maybe<TypeformResponseDefinition>>>;
  calculated?: Maybe<TypeformResponseCalculated>;
};

export type TypeformResponseItemSubmittedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type TypeformResponseMetaData = {
  __typename?: 'TypeformResponseMetaData';
  userAgent?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  referer?: Maybe<Scalars['String']>;
  networkId?: Maybe<Scalars['String']>;
  browser?: Maybe<Scalars['String']>;
};

export type TypeformResponseAnswer = {
  __typename?: 'TypeformResponseAnswer';
  field?: Maybe<TypeformResponseAnswerField>;
  type?: Maybe<TypeformResponseAnswerType>;
  text?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  payment?: Maybe<TypeformPayment>;
  choice?: Maybe<TypeformChoice>;
  choices?: Maybe<TypeformChoices>;
  boolean?: Maybe<Scalars['Boolean']>;
};

export type TypeformResponseAnswerDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type TypeformResponseAnswerField = {
  __typename?: 'TypeformResponseAnswerField';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<TypeformResponseAnswerFieldType>;
  ref?: Maybe<Scalars['String']>;
};

export enum TypeformResponseAnswerFieldType {
  ShortText = 'short_text',
  Email = 'email',
  LongText = 'long_text',
  Dropdown = 'dropdown',
  OpinionScale = 'opinion_scale',
  MultipleChoice = 'multiple_choice',
  PictureChoice = 'picture_choice',
  Website = 'website',
  FileUpload = 'file_upload',
  Legal = 'legal',
  YesNo = 'yes_no',
  Rating = 'rating',
  Number = 'number',
  Date = 'date',
  Payment = 'payment',
  Group = 'group',
  Statement = 'statement',
  PhoneNumber = 'phone_number',
}

export enum TypeformResponseAnswerType {
  Text = 'text',
  Choice = 'choice',
  Choices = 'choices',
  Email = 'email',
  Url = 'url',
  FileUrl = 'file_url',
  Boolean = 'boolean',
  Number = 'number',
  Date = 'date',
  Payment = 'payment',
}

export type TypeformPayment = {
  __typename?: 'TypeformPayment';
  amount?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TypeformChoice = {
  __typename?: 'TypeformChoice';
  label?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
};

export type TypeformChoices = {
  __typename?: 'TypeformChoices';
  labels?: Maybe<Array<Maybe<Scalars['String']>>>;
  other?: Maybe<Scalars['String']>;
};

export type TypeformResponseDefinition = {
  __typename?: 'TypeformResponseDefinition';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type TypeformResponseCalculated = {
  __typename?: 'TypeformResponseCalculated';
  score?: Maybe<Scalars['Float']>;
};

export type StripeQuery = {
  __typename?: 'StripeQuery';
  /** Retrieves your Stripe balance */
  balance?: Maybe<StripeBalance>;
  /** Retrieves the Stripe Balance Transaction with the given ID */
  balanceTransaction?: Maybe<StripeBalanceTransaction>;
  /**
   * Returns a list of Stripe Transactions that have contributed to the Stripe
   * account balance. The list can be filtered by specifiying the optional Input arguments
   */
  balanceTransactions?: Maybe<StripeBalanceTransactionList>;
  /** Retrieves the details of a Stripe Charge that has previously been created */
  charge?: Maybe<StripeCharge>;
  /**
   * Returns a list of Stripe Charges you’ve previously created. The list can be
   * filtered by specifiying the optional Input arguments
   */
  charges?: Maybe<StripeChargeList>;
  /** Retrieves a Stripe Customer */
  customer?: Maybe<StripeCustomer>;
  /** Retrieves a list of Stripe Customers. The list can be filtered by specifiying the optional Input arguments */
  customers?: Maybe<StripeCustomerList>;
  /** Retrieves a Stripe Dispute */
  dispute?: Maybe<StripeDispute>;
  /** Retrieves a list of Stripe Disputes. The list can be filtered by specifiying the optional Input arguments */
  disputes?: Maybe<StripeDisputeList>;
  /** Retrieves a Stripe Event */
  event?: Maybe<StripeEvent>;
  /** Retrieves a list of Stripe Events. The list can be filtered by specifiying the optional Input arguments */
  events?: Maybe<StripeEventList>;
  /** Retrieves a Stripe Payout */
  payout?: Maybe<StripePayout>;
  /** Retrives a list of Stripe Payouts.  The list can be filtered by specifiying the optional Input arguments */
  payouts?: Maybe<StripePayoutList>;
  /** Retrieves a Stripe Product */
  product?: Maybe<StripeProduct>;
  /** Retrives a list of Stripe Products.  The list can be filtered by specifiying the optional Input arguments */
  products?: Maybe<StripeProductList>;
  /** Retrieves a Stripe Price */
  price?: Maybe<StripePrice>;
  /** Retrieves a list of all your Stripe prices */
  prices?: Maybe<StripePriceList>;
  /** Retrieves a Stripe Refund */
  refund?: Maybe<StripeRefund>;
  /** Retrives a list of Stripe Refunds.  The list can be filtered by specifiying the optional Input arguments */
  refunds?: Maybe<StripeRefundList>;
  /** Retrieves a Stripe Payment Method */
  paymentMethod?: Maybe<StripePaymentMethod>;
  /** Retrieves a list of Stripe Payment Methods. The list can be filtered by specifying the optional Input arguments */
  paymentMethods?: Maybe<StripePaymentMethodList>;
  /** Retrieves a Stripe Bank Account */
  bankAccount?: Maybe<StripeBankAccount>;
  /** Retrieves a list of Stripe Bank Accounts. The list can be filtered by specifying the optional Input arguments */
  bankAccounts?: Maybe<StripeBankAccountList>;
  /** Retrieves a Stripe Card */
  card?: Maybe<StripeCard>;
  /** Retrieves a list of Stripe Cards. The list can be filtered by specifying the optional Input arguments */
  cards?: Maybe<StripeCardList>;
  /** Retrieves a Stripe Source */
  source?: Maybe<StripeSource>;
  /** Retrieves a Stripe Coupon */
  coupon?: Maybe<StripeCoupon>;
  /** Retrieves a list of Stripe Coupons. The list can be filtered by specifying the optional Input arguments. */
  coupons?: Maybe<StripeCouponList>;
  /** Retrieves a Stripe Credit Note */
  creditNote?: Maybe<StripeCreditNote>;
  /** Retrieves a list of Stripe Credit Notes. The list can be filtered by specifying the optional Input arguments. */
  creditNotes?: Maybe<StripeCreditNoteList>;
  /** Retrieve a credit note's line items */
  creditNoteLineItems?: Maybe<StripeCreditNoteLineItemList>;
  /** Retrieves a Stripe Invoice */
  invoice?: Maybe<StripeInvoice>;
  /** Retrieves a list of Stripe Invoices. The list can be filtered by specifying the optional Input arguments. */
  invoices?: Maybe<StripeInvoiceList>;
  /** Retrieves a Stripe Invoice Item */
  invoiceItem?: Maybe<StripeInvoiceItem>;
  /** Retrieves a list of Stripe Invoices Items. The list can be filtered by specifying the optional Input arguments. */
  invoiceItems?: Maybe<StripeInvoiceItemList>;
  /** Retrieves a Stripe Plan */
  plan?: Maybe<StripePlan>;
  /** Retrieves a list of Stripe Plans. The list can be filtered by specifying the optional Input arguments. */
  plans?: Maybe<StripePlanList>;
  /** Retrieves a Stripe Subscription */
  subscription?: Maybe<StripeSubscription>;
  /** Retrieves a list of Stripe Subscriptions. The list can be filtered by specifying the optional Input arguments. */
  subscriptions?: Maybe<StripeSubscriptionList>;
  /** Retrieves a Stripe Subscription Item */
  subscriptionItem?: Maybe<StripeSubscriptionItem>;
  /**
   * Retrieves a list of Stripe Subscription Items for the given subscription Id.
   * The list can be filtered by specifying the optional Input arguments.
   */
  subscriptionItems?: Maybe<StripeSubscriptionItemList>;
  /** Retrieves a Stripe Subscription Schedule */
  subscriptionSchedule?: Maybe<StripeSubscriptionSchedule>;
  /** Returns a list of your subscription Schedules */
  subscriptionSchedules?: Maybe<StripeSubscriptionScheduleList>;
  /** Retrieves a Stripe Tax Rate */
  taxRate?: Maybe<StripeTaxRate>;
  /**
   * Returns a list of your tax rates. Tax rates are returned sorted by creation
   * date, with the most recently created tax rates appearing first.
   */
  taxRates?: Maybe<StripeTaxRateList>;
};

export type StripeQueryBalanceTransactionArgs = {
  id: Scalars['ID'];
};

export type StripeQueryBalanceTransactionsArgs = {
  input?: Maybe<StripeBalanceTransactionListInput>;
};

export type StripeQueryChargeArgs = {
  id: Scalars['ID'];
};

export type StripeQueryChargesArgs = {
  input?: Maybe<StripeChargeListInput>;
};

export type StripeQueryCustomerArgs = {
  id: Scalars['ID'];
};

export type StripeQueryCustomersArgs = {
  input?: Maybe<StripeCustomerListInput>;
};

export type StripeQueryDisputeArgs = {
  id: Scalars['ID'];
};

export type StripeQueryDisputesArgs = {
  input?: Maybe<StripeDisputeListInput>;
};

export type StripeQueryEventArgs = {
  id: Scalars['ID'];
};

export type StripeQueryEventsArgs = {
  input?: Maybe<StripeEventListInput>;
};

export type StripeQueryPayoutArgs = {
  id: Scalars['ID'];
};

export type StripeQueryPayoutsArgs = {
  input?: Maybe<StripePayoutListInput>;
};

export type StripeQueryProductArgs = {
  id: Scalars['ID'];
};

export type StripeQueryProductsArgs = {
  input?: Maybe<StripeProductListInput>;
};

export type StripeQueryPriceArgs = {
  id: Scalars['ID'];
};

export type StripeQueryPricesArgs = {
  input?: Maybe<StripePriceListInput>;
};

export type StripeQueryRefundArgs = {
  id: Scalars['ID'];
};

export type StripeQueryRefundsArgs = {
  input?: Maybe<StripeRefundListInput>;
};

export type StripeQueryPaymentMethodArgs = {
  id: Scalars['ID'];
};

export type StripeQueryPaymentMethodsArgs = {
  input?: Maybe<StripePaymentMethodListInput>;
};

export type StripeQueryBankAccountArgs = {
  input: StripeBankAccountInput;
};

export type StripeQueryBankAccountsArgs = {
  input?: Maybe<StripeBankAccountListInput>;
};

export type StripeQueryCardArgs = {
  input: StripeCardInput;
};

export type StripeQueryCardsArgs = {
  input: StripeCardListInput;
};

export type StripeQuerySourceArgs = {
  input: StripeSourceInput;
};

export type StripeQueryCouponArgs = {
  id: Scalars['ID'];
};

export type StripeQueryCouponsArgs = {
  input?: Maybe<StripeCouponListInput>;
};

export type StripeQueryCreditNoteArgs = {
  id: Scalars['ID'];
};

export type StripeQueryCreditNotesArgs = {
  input?: Maybe<StripeCreditNoteListInput>;
};

export type StripeQueryCreditNoteLineItemsArgs = {
  input?: Maybe<StripeCreditNoteLineItemListInput>;
};

export type StripeQueryInvoiceArgs = {
  id: Scalars['ID'];
};

export type StripeQueryInvoicesArgs = {
  input?: Maybe<StripeInvoiceListInput>;
};

export type StripeQueryInvoiceItemArgs = {
  id: Scalars['ID'];
};

export type StripeQueryInvoiceItemsArgs = {
  input?: Maybe<StripeInvoiceItemListInput>;
};

export type StripeQueryPlanArgs = {
  id: Scalars['ID'];
};

export type StripeQueryPlansArgs = {
  input?: Maybe<StripePlanListInput>;
};

export type StripeQuerySubscriptionArgs = {
  id: Scalars['ID'];
};

export type StripeQuerySubscriptionsArgs = {
  input?: Maybe<StripeSubscriptionListInput>;
};

export type StripeQuerySubscriptionItemArgs = {
  id: Scalars['ID'];
};

export type StripeQuerySubscriptionItemsArgs = {
  input?: Maybe<StripeSubscriptionItemListInput>;
};

export type StripeQuerySubscriptionScheduleArgs = {
  id: Scalars['ID'];
};

export type StripeQuerySubscriptionSchedulesArgs = {
  input?: Maybe<StripeSubscriptionScheduleListInput>;
};

export type StripeQueryTaxRateArgs = {
  id: Scalars['ID'];
};

export type StripeQueryTaxRatesArgs = {
  input?: Maybe<StripeTaxRateListInput>;
};

export type StripeBalance = {
  __typename?: 'StripeBalance';
  object?: Maybe<Scalars['String']>;
  available?: Maybe<Array<Maybe<StripeBalanceAvailable>>>;
  connectReserved?: Maybe<Array<Maybe<StripeConnectReserved>>>;
  livemode?: Maybe<Scalars['Boolean']>;
  pending?: Maybe<Array<Maybe<StripeBalancePending>>>;
};

/** Funds that are available to be transferred or paid out */
export type StripeBalanceAvailable = {
  __typename?: 'StripeBalanceAvailable';
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  sourceTypes?: Maybe<StripeSourceTypes>;
};

/** Breakdown of balance by source types */
export type StripeSourceTypes = {
  __typename?: 'StripeSourceTypes';
  bankAccount?: Maybe<Scalars['Int']>;
  card?: Maybe<Scalars['Int']>;
};

/** Funds held due to negative balances on connected Custom accounts */
export type StripeConnectReserved = {
  __typename?: 'StripeConnectReserved';
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  sourceTypes?: Maybe<StripeSourceTypes>;
};

/** Funds that are not yet available in the balance, due to the 7-day rolling pay cycle */
export type StripeBalancePending = {
  __typename?: 'StripeBalancePending';
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  sourceTypes?: Maybe<StripeSourceTypes>;
};

export type StripeBalanceTransaction = {
  __typename?: 'StripeBalanceTransaction';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  availableOn?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  exchangeRate?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Int']>;
  feeDetails?: Maybe<Array<Maybe<StripeFeeDetail>>>;
  net?: Maybe<Scalars['Int']>;
  source?: Maybe<StripeSource>;
  status?: Maybe<StripeBalanceTransactionType>;
  type?: Maybe<StripeBalanceTransactionType>;
  reportingCategory?: Maybe<StripeReportingCategory>;
};

export type StripeBalanceTransactionCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** Detailed breakdown of fees (in cents) paid for this transaction. */
export type StripeFeeDetail = {
  __typename?: 'StripeFeeDetail';
  amount?: Maybe<Scalars['Int']>;
  application?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<StripeFeeDetailType>;
};

export enum StripeFeeDetailType {
  ApplicationFee = 'application_fee',
  StripeFee = 'stripe_fee',
  Tax = 'tax',
}

export type StripeSource = {
  __typename?: 'StripeSource';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  clientSecret?: Maybe<Scalars['String']>;
  codeVerification?: Maybe<StripeCodeVerification>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<StripeCustomer>;
  flow?: Maybe<StripeFlow>;
  livemode?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<StripeOwner>;
  receiver?: Maybe<StripeReceiver>;
  redirect?: Maybe<StripeRedirect>;
  sourceOrder?: Maybe<StripeSourceOrder>;
  statementDescriptor?: Maybe<Scalars['String']>;
  status?: Maybe<StripeSourceStatus>;
  type?: Maybe<StripeSourceType>;
  usage?: Maybe<StripeSourceUsage>;
};

export type StripeSourceCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeCodeVerification = {
  __typename?: 'StripeCodeVerification';
  attemptsRemaining?: Maybe<Scalars['Int']>;
  status?: Maybe<StripeCodeVerificationStatus>;
};

export enum StripeCodeVerificationStatus {
  Pending = 'pending',
  AttemptsRemaining = 'attempts_remaining',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export type StripeCustomer = {
  __typename?: 'StripeCustomer';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  address?: Maybe<StripeAddress>;
  balance?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  defaultSource?: Maybe<StripeSource>;
  delinquent?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  invoicePrefix?: Maybe<Scalars['String']>;
  invoiceSettings?: Maybe<StripeInvoiceSettings>;
  livemode?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  nextInvoiceSequence?: Maybe<Scalars['Int']>;
  preferredLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipping?: Maybe<StripeShippingAddress>;
  sources?: Maybe<StripeSourceList>;
  subscriptions?: Maybe<StripeSubscriptionList>;
  taxExempt?: Maybe<StripeCustomerTaxExempt>;
  taxIds?: Maybe<Scalars['String']>;
};

export type StripeCustomerCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeAddress = {
  __typename?: 'StripeAddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type StripeInvoiceSettings = {
  __typename?: 'StripeInvoiceSettings';
  customFields?: Maybe<Array<Maybe<StripeInvoiceSettingsCustom>>>;
  defaultPaymentMethod?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
};

export type StripeInvoiceSettingsCustom = {
  __typename?: 'StripeInvoiceSettingsCustom';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type StripeShippingAddress = {
  __typename?: 'StripeShippingAddress';
  address?: Maybe<StripeAddress>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type StripeSourceList = {
  __typename?: 'StripeSourceList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeSource>>>;
};

export type StripeSubscriptionList = {
  __typename?: 'StripeSubscriptionList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeSubscription>>>;
};

export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  id?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  applicationFeePercent?: Maybe<Scalars['Float']>;
  billingCycleAnchor?: Maybe<Scalars['String']>;
  billingThresholds?: Maybe<StripeBillingThresholds>;
  cancelAtPeriodEnd?: Maybe<Scalars['Boolean']>;
  cancelAt?: Maybe<Scalars['String']>;
  canceledAt?: Maybe<Scalars['String']>;
  collectionMethod?: Maybe<StripeCollectionMethod>;
  created?: Maybe<Scalars['String']>;
  currentPeriodEnd?: Maybe<Scalars['String']>;
  currentPeriodStart?: Maybe<Scalars['String']>;
  customer?: Maybe<StripeCustomer>;
  daysUntilDue?: Maybe<Scalars['Int']>;
  defaultPaymentMethod?: Maybe<StripePaymentMethod>;
  defaultSource?: Maybe<StripeSource>;
  defaultTaxRates?: Maybe<Array<Maybe<StripeTaxRate>>>;
  endedAt?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<StripeSubscriptionItemList>>>;
  latestInvoice?: Maybe<StripeInvoice>;
  nextPendingInvoiceItemInvoice?: Maybe<Scalars['String']>;
  pauseCollection?: Maybe<StripeSubscriptionPauseCollection>;
  pendingInvoiceItemInterval?: Maybe<StripeSubscriptionPendingInvoiceItemInterval>;
  pendingSetupIntent?: Maybe<Scalars['String']>;
  pendingUpdate?: Maybe<StripeSubscriptionPendingUpdate>;
  plan?: Maybe<StripePlan>;
  quantity?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['String']>;
  schedule?: Maybe<StripeSubscriptionSchedule>;
  status?: Maybe<StripeSubscriptionStatus>;
  trialEnd?: Maybe<Scalars['String']>;
  trialStart?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionBillingCycleAnchorArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionCancelAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionCanceledAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionCurrentPeriodEndArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionCurrentPeriodStartArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionEndedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionNextPendingInvoiceItemInvoiceArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionStartDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionTrialEndArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionTrialStartArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeBillingThresholds = {
  __typename?: 'StripeBillingThresholds';
  amountGte?: Maybe<Scalars['Int']>;
  resetBillingCycleAnchor?: Maybe<Scalars['Boolean']>;
};

export enum StripeCollectionMethod {
  ChargeAutomatically = 'charge_automatically',
  SendInvoice = 'send_invoice',
}

export type StripePaymentMethod = {
  __typename?: 'StripePaymentMethod';
  id?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  billingDetails?: Maybe<StripeBillingDetails>;
  auBecsDebit?: Maybe<StripePaymentMethodAuBecsDebit>;
  bacsDebit?: Maybe<StripePaymentMethodBacsDebit>;
  bancontact?: Maybe<Scalars['String']>;
  eps?: Maybe<Scalars['String']>;
  fpx?: Maybe<StripePaymentMethodFpx>;
  giropay?: Maybe<Scalars['String']>;
  ideal?: Maybe<StripePaymentMethodIdeal>;
  p24?: Maybe<Scalars['String']>;
  sepaDebit?: Maybe<StripePaymentMethodSepaDebit>;
  card?: Maybe<StripePaymentMethodCard>;
  cardPresent?: Maybe<StripeCardPresent>;
  created?: Maybe<Scalars['String']>;
  customer?: Maybe<StripeCustomer>;
  livemode?: Maybe<Scalars['Boolean']>;
  type?: Maybe<StripePaymentMethodType>;
};

export type StripePaymentMethodCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeBillingDetails = {
  __typename?: 'StripeBillingDetails';
  address?: Maybe<StripeAddress>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type StripePaymentMethodAuBecsDebit = {
  __typename?: 'StripePaymentMethodAuBecsDebit';
  bsbNumber?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
};

export type StripePaymentMethodBacsDebit = {
  __typename?: 'StripePaymentMethodBacsDebit';
  sortCode?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
};

export type StripePaymentMethodFpx = {
  __typename?: 'StripePaymentMethodFpx';
  bank?: Maybe<StripePaymentMethodFpxBank>;
};

export enum StripePaymentMethodFpxBank {
  AffinBank = 'affin_bank',
  AllianceBank = 'alliance_bank',
  Ambank = 'ambank',
  BankIslam = 'bank_islam',
  BankMuamalat = 'bank_muamalat',
  BankRakyat = 'bank_rakyat',
  Bsn = 'bsn',
  Cimb = 'cimb',
  HongLeongBank = 'hong_leong_bank',
  Hsbc = 'hsbc',
  Kfh = 'kfh',
  Maybank2u = 'maybank2u',
  Ocbc = 'ocbc',
  PublicBank = 'public_bank',
  Rhb = 'rhb',
  StandardChartered = 'standard_chartered',
  Uob = 'uob',
  DeutscheBank = 'deutsche_bank',
  Maybank2e = 'maybank2e',
  PbEnterprise = 'pb_enterprise',
}

export type StripePaymentMethodIdeal = {
  __typename?: 'StripePaymentMethodIdeal';
  bank?: Maybe<StripePaymentMethodIdealBank>;
  bic?: Maybe<Scalars['String']>;
};

export enum StripePaymentMethodIdealBank {
  AbnAmro = 'abn_amro',
  AsnBank = 'asn_bank',
  Bunq = 'bunq',
  Handelsbanken = 'handelsbanken',
  Ing = 'ing',
  Knab = 'knab',
  Moneyou = 'moneyou',
  Rabobank = 'rabobank',
  Regiobank = 'regiobank',
  SnsBank = 'sns_bank',
  TriodosBank = 'triodos_bank',
  VanLanschot = 'van_lanschot',
}

export type StripePaymentMethodSepaDebit = {
  __typename?: 'StripePaymentMethodSepaDebit';
  bankCode?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
};

export type StripePaymentMethodCard = {
  __typename?: 'StripePaymentMethodCard';
  brand?: Maybe<StripePaymentMethodCardBrand>;
  checks?: Maybe<StripeChecks>;
  country?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  funding?: Maybe<StripePaymentMethodCardFunding>;
  last4?: Maybe<Scalars['String']>;
  threeDSecureUsage?: Maybe<StripeThreeDSecureUsage>;
  wallet?: Maybe<StripeCardWallet>;
  generatedFrom?: Maybe<StripePaymentMethodGeneratedFrom>;
};

export enum StripePaymentMethodCardBrand {
  Amex = 'amex',
  Diners = 'diners',
  Discover = 'discover',
  Jcb = 'jcb',
  Mastercard = 'mastercard',
  Unionpay = 'unionpay',
  Visa = 'visa',
  Unknown = 'unknown',
}

export type StripeChecks = {
  __typename?: 'StripeChecks';
  addressLine1Check?: Maybe<StripeCardCheck>;
  addressPostalCodeCheck?: Maybe<StripeCardCheck>;
  cvcCheck?: Maybe<StripeCardCheck>;
};

export enum StripeCardCheck {
  Pass = 'pass',
  Fail = 'fail',
  Unavailable = 'unavailable',
  Unchecked = 'unchecked',
}

export enum StripePaymentMethodCardFunding {
  Credit = 'credit',
  Debit = 'debit',
  Prepaid = 'prepaid',
  Unknown = 'unknown',
}

export type StripeThreeDSecureUsage = {
  __typename?: 'StripeThreeDSecureUsage';
  supported?: Maybe<Scalars['Boolean']>;
};

export type StripeCardWallet = {
  __typename?: 'StripeCardWallet';
  amexExpressCheckout?: Maybe<Scalars['String']>;
  applePay?: Maybe<Scalars['String']>;
  dynamicLast4?: Maybe<Scalars['String']>;
  googlePay?: Maybe<Scalars['String']>;
  masterpass?: Maybe<StripeMasterPass>;
  samsungPay?: Maybe<Scalars['String']>;
  type?: Maybe<StripeCardWalletType>;
  visaCheckout?: Maybe<StripeVisaCheckout>;
};

export type StripeMasterPass = {
  __typename?: 'StripeMasterPass';
  billingAddress?: Maybe<StripeAddress>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<StripeAddress>;
};

export enum StripeCardWalletType {
  AmexExpressCheckou = 'amex_express_checkou',
  ApplePay = 'apple_pay',
  GooglePay = 'google_pay',
  Masterpass = 'masterpass',
  SamsungPay = 'samsung_pay',
  VisaCheckout = 'visa_checkout',
}

export type StripeVisaCheckout = {
  __typename?: 'StripeVisaCheckout';
  billingAddress?: Maybe<StripeAddress>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<StripeAddress>;
};

export type StripePaymentMethodGeneratedFrom = {
  __typename?: 'StripePaymentMethodGeneratedFrom';
  charge?: Maybe<StripeCharge>;
  paymentMethodDetails?: Maybe<StripePaymentMethodDetails>;
};

export type StripeCharge = {
  __typename?: 'StripeCharge';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  amountRefunded?: Maybe<Scalars['Int']>;
  application?: Maybe<Scalars['String']>;
  applicationFee?: Maybe<Scalars['String']>;
  applicationFeeAmount?: Maybe<Scalars['Int']>;
  balanceTransaction?: Maybe<StripeBalanceTransaction>;
  billingDetails?: Maybe<StripeBillingDetails>;
  captured?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<StripeCustomer>;
  description?: Maybe<Scalars['String']>;
  disputed?: Maybe<Scalars['Boolean']>;
  failureCode?: Maybe<Scalars['String']>;
  failureMessage?: Maybe<Scalars['String']>;
  fraudDetails?: Maybe<StripeFraudDetails>;
  invoice?: Maybe<Scalars['String']>;
  livemode?: Maybe<Scalars['Boolean']>;
  onBehalfOf?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  outcome?: Maybe<StripeOutcome>;
  paid?: Maybe<Scalars['Boolean']>;
  paymentIntent?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  paymentMethodDetails?: Maybe<StripePaymentMethodDetails>;
  receiptEmail?: Maybe<Scalars['String']>;
  receiptNumber?: Maybe<Scalars['String']>;
  receiptUrl?: Maybe<Scalars['String']>;
  refunded?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['String']>;
  shipping?: Maybe<StripeShipping>;
  sourceTransfer?: Maybe<Scalars['String']>;
  statementDescriptor?: Maybe<Scalars['String']>;
  status?: Maybe<StripeChargeStatus>;
  transfer?: Maybe<Scalars['String']>;
  transferData?: Maybe<StripeTransferData>;
  transferGroup?: Maybe<Scalars['String']>;
};

export type StripeChargeCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeFraudDetails = {
  __typename?: 'StripeFraudDetails';
  stripeReport?: Maybe<StripeFraudDetailsStripeReport>;
  userReport?: Maybe<Scalars['String']>;
};

export enum StripeFraudDetailsStripeReport {
  Fraudulent = 'fraudulent',
}

export type StripeOutcome = {
  __typename?: 'StripeOutcome';
  networkStatus?: Maybe<StripeOutcomeNetworkStatus>;
  reason?: Maybe<StripeOutcomeReason>;
  riskLevel?: Maybe<StripeOutcomeRiskLevel>;
  riskScore?: Maybe<Scalars['Int']>;
  rule?: Maybe<Scalars['String']>;
  sellerMessage?: Maybe<Scalars['String']>;
  type?: Maybe<StripeOutcomeType>;
};

export enum StripeOutcomeNetworkStatus {
  ApprovedByNetwork = 'approved_by_network',
  DeclinedByNetwork = 'declined_by_network',
  NotSentToNetwork = 'not_sent_to_network',
  ReversedAfterApproval = 'reversed_after_approval',
}

export enum StripeOutcomeReason {
  HighestRiskLevel = 'highest_risk_level',
  ElevatedRiskLevel = 'elevated_risk_level',
  Rule = 'rule',
}

export enum StripeOutcomeRiskLevel {
  Normal = 'normal',
  Elevated = 'elevated',
  Highest = 'highest',
  NotAssessed = 'not_assessed',
  Unknown = 'unknown',
}

export enum StripeOutcomeType {
  Authorized = 'authorized',
  ManualReview = 'manual_review',
  IssuerDeclined = 'issuer_declined',
  Blocked = 'blocked',
  Invalid = 'invalid',
}

export type StripePaymentMethodDetails = {
  __typename?: 'StripePaymentMethodDetails';
  achCreditTransfer?: Maybe<StripeAchCreditTransfer>;
  achDebit?: Maybe<StripeAchDebitTransfer>;
  alipay?: Maybe<Scalars['String']>;
  bancontact?: Maybe<StripeBancontact>;
  card?: Maybe<StripeCardPayment>;
  cardPresent?: Maybe<StripeCardPresent>;
  eps?: Maybe<StripeEps>;
  giropay?: Maybe<StripeGiroPay>;
  ideal?: Maybe<StripeIdeal>;
  klarna?: Maybe<Scalars['String']>;
  multibanco?: Maybe<StripeMultibanco>;
  p24?: Maybe<StripeP24>;
  sofort?: Maybe<StripeSofort>;
  stripeAccount?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  wechat?: Maybe<Scalars['String']>;
};

export type StripeAchCreditTransfer = {
  __typename?: 'StripeAchCreditTransfer';
  accountNumber?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  routingNumber?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
};

export type StripeAchDebitTransfer = {
  __typename?: 'StripeAchDebitTransfer';
  accountHolderType?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  routingNumber?: Maybe<Scalars['String']>;
};

export type StripeBancontact = {
  __typename?: 'StripeBancontact';
  bankCode?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  ibanLast4?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<StripeBancontactPreferredLanguage>;
  verifiedName?: Maybe<Scalars['String']>;
};

export enum StripeBancontactPreferredLanguage {
  En = 'en',
  De = 'de',
  Fr = 'fr',
  Nl = 'nl',
}

export type StripeCardPayment = {
  __typename?: 'StripeCardPayment';
  brand?: Maybe<StripePaymentMethodCardBrand>;
  checks?: Maybe<StripeChecks>;
  country?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  funding?: Maybe<StripeCardFunding>;
  last4?: Maybe<Scalars['String']>;
  threeDSecure?: Maybe<StripeThreeDSecure>;
  wallet?: Maybe<StripeCardWallet>;
  generatedFrom?: Maybe<StripePaymentMethodGeneratedFrom>;
};

export enum StripeCardFunding {
  Credit = 'credit',
  Debit = 'debit',
  Prepaid = 'prepaid',
  Unknown = 'unknown',
}

export type StripeThreeDSecure = {
  __typename?: 'StripeThreeDSecure';
  authenticated?: Maybe<Scalars['Boolean']>;
  succeeded?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['String']>;
};

export type StripeCardPresent = {
  __typename?: 'StripeCardPresent';
  brand?: Maybe<StripePaymentMethodCardBrand>;
  country?: Maybe<Scalars['String']>;
  emvAuthData?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['String']>;
  expYear?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  funding?: Maybe<StripeCardFunding>;
  generatedCard?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  readMethod?: Maybe<StripeCardPresentReadMethod>;
  network?: Maybe<StripeCardPresentNetwork>;
  receipt?: Maybe<StripeReceipt>;
};

export enum StripeCardPresentReadMethod {
  ContactEmv = 'contact_emv',
  ContactlessEmv = 'contactless_emv',
  MagneticStripeFallback = 'magnetic_stripe_fallback',
  MagneticStripeTrack2 = 'magnetic_stripe_track2',
  ContactlessMagstripeMode = 'contactless_magstripe_mode',
}

export enum StripeCardPresentNetwork {
  Amex = 'amex',
  Diners = 'diners',
  Discover = 'discover',
  Interac = 'interac',
  Jcb = 'jcb',
  Mastercard = 'mastercard',
  Unionpay = 'unionpay',
  Visa = 'visa',
  Unknown = 'unknown',
}

export type StripeReceipt = {
  __typename?: 'StripeReceipt';
  applicationCryptogram?: Maybe<Scalars['String']>;
  applicationPreferredName?: Maybe<Scalars['String']>;
  authorizationCode?: Maybe<Scalars['String']>;
  authorizationResponseCode?: Maybe<Scalars['String']>;
  cardholderVerificationMethod?: Maybe<Scalars['String']>;
  dedicatedFileName?: Maybe<Scalars['String']>;
  terminalVerificationResults?: Maybe<Scalars['String']>;
  transactionStatusInformation?: Maybe<Scalars['String']>;
};

export type StripeEps = {
  __typename?: 'StripeEps';
  verifiedName?: Maybe<Scalars['String']>;
};

export type StripeGiroPay = {
  __typename?: 'StripeGiroPay';
  bankCode?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  verifiedName?: Maybe<Scalars['String']>;
};

export type StripeIdeal = {
  __typename?: 'StripeIdeal';
  bank?: Maybe<StripeIdealBank>;
  bic?: Maybe<Scalars['String']>;
  ibanLast4?: Maybe<Scalars['String']>;
  verifiedName?: Maybe<Scalars['String']>;
};

export enum StripeIdealBank {
  AbnAmro = 'abn_amro',
  AsnBank = 'asn_bank',
  Bunq = 'bunq',
  Handelsbanken = 'handelsbanken',
  Ing = 'ing',
  Knab = 'knab',
  Moneyou = 'moneyou',
  Rabobank = 'rabobank',
  Regiobank = 'regiobank',
  SnsBank = 'sns_bank',
  TriodosBank = 'triodos_bank',
  VanLanschot = 'van_lanschot',
}

export type StripeMultibanco = {
  __typename?: 'StripeMultibanco';
  entity?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
};

export type StripeP24 = {
  __typename?: 'StripeP24';
  reference?: Maybe<Scalars['String']>;
  verifiedName?: Maybe<Scalars['String']>;
};

export type StripeSofort = {
  __typename?: 'StripeSofort';
  bankCode?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  ibanLast4?: Maybe<Scalars['String']>;
  verifiedName?: Maybe<Scalars['String']>;
};

export type StripeShipping = {
  __typename?: 'StripeShipping';
  address?: Maybe<StripeAddress>;
  carrier?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  trackingNumber?: Maybe<Scalars['String']>;
};

export enum StripeChargeStatus {
  Succeeded = 'succeeded',
  Pending = 'pending',
  Failed = 'failed',
}

export type StripeTransferData = {
  __typename?: 'StripeTransferData';
  amount?: Maybe<Scalars['Int']>;
  destination?: Maybe<Scalars['String']>;
};

export enum StripePaymentMethodType {
  AuBecsDebit = 'au_becs_debit',
  BacsDebit = 'bacs_debit',
  Bancontact = 'bancontact',
  Card = 'card',
  Eps = 'eps',
  Fpx = 'fpx',
  Giropay = 'giropay',
  Ideal = 'ideal',
  P24 = 'p24',
  SepaDebit = 'sepa_debit',
}

export type StripeTaxRate = {
  __typename?: 'StripeTaxRate';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  inclusive?: Maybe<Scalars['Boolean']>;
  jurisdiction?: Maybe<Scalars['String']>;
  livemode?: Maybe<Scalars['Boolean']>;
  percentage?: Maybe<Scalars['Float']>;
};

export type StripeTaxRateCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionItemList = {
  __typename?: 'StripeSubscriptionItemList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeSubscriptionItem>>>;
};

export type StripeSubscriptionItem = {
  __typename?: 'StripeSubscriptionItem';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  billingThresholds?: Maybe<StripeSubscriptionItemBillingThreshold>;
  created?: Maybe<Scalars['String']>;
  plan?: Maybe<StripePlan>;
  price?: Maybe<StripePrice>;
  quantity?: Maybe<Scalars['Int']>;
  subscription?: Maybe<StripeSubscription>;
  taxRates?: Maybe<Array<Maybe<StripeTaxRate>>>;
};

export type StripeSubscriptionItemCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionItemBillingThreshold = {
  __typename?: 'StripeSubscriptionItemBillingThreshold';
  usageGte?: Maybe<Scalars['Int']>;
};

export type StripePlan = {
  __typename?: 'StripePlan';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  aggregateUsage?: Maybe<StripePlanAggregateUsage>;
  amount?: Maybe<Scalars['Int']>;
  billingScheme?: Maybe<StripeBillingScheme>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  interval?: Maybe<StripePlanInterval>;
  intervalCount?: Maybe<Scalars['Int']>;
  livemode?: Maybe<Scalars['Boolean']>;
  nickname?: Maybe<Scalars['String']>;
  product?: Maybe<StripeProduct>;
  tiers?: Maybe<StripePlanTiers>;
  tiersMode?: Maybe<StripePlanTiersMode>;
  transformUsage?: Maybe<StripePlanTransformUsage>;
  trialPeriodDays?: Maybe<Scalars['Int']>;
  usageType?: Maybe<StripePlanUsageType>;
};

export type StripePlanCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum StripePlanAggregateUsage {
  Sum = 'sum',
  LastDuringPeriod = 'last_during_period',
  LastEver = 'last_ever',
  Max = 'max',
}

export enum StripeBillingScheme {
  PerUnit = 'per_unit',
  Tiered = 'tiered',
}

export enum StripePlanInterval {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export type StripeProduct = {
  __typename?: 'StripeProduct';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  caption?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deactivateOn?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  livemode?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  packageDimensions?: Maybe<StripePackageDimensions>;
  shippable?: Maybe<Scalars['Boolean']>;
  statementDescriptor?: Maybe<Scalars['String']>;
  type?: Maybe<StripeProductType>;
  unitLabel?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StripeProductCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeProductUpdatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripePackageDimensions = {
  __typename?: 'StripePackageDimensions';
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export enum StripeProductType {
  Good = 'good',
  Service = 'service',
}

export type StripePlanTiers = {
  __typename?: 'StripePlanTiers';
  flatAmount?: Maybe<Scalars['Int']>;
  unitAmount?: Maybe<Scalars['Int']>;
  upTo?: Maybe<Scalars['Int']>;
};

export enum StripePlanTiersMode {
  Graduated = 'graduated',
  Volume = 'volume',
}

export type StripePlanTransformUsage = {
  __typename?: 'StripePlanTransformUsage';
  divideBy?: Maybe<Scalars['Int']>;
  round?: Maybe<StripePlanTransformUsageRound>;
};

export enum StripePlanTransformUsageRound {
  Up = 'up',
  Down = 'down',
}

export enum StripePlanUsageType {
  Metered = 'metered',
  Licensed = 'licensed',
}

export type StripePrice = {
  __typename?: 'StripePrice';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  billingScheme?: Maybe<StripePriceBillingScheme>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  livemode?: Maybe<Scalars['Boolean']>;
  lookupKey?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  product?: Maybe<StripeProduct>;
  recurring?: Maybe<StripePriceRecurring>;
  tiers?: Maybe<Array<Maybe<StripePriceTier>>>;
  tiersMode?: Maybe<StripePriceTiersMode>;
  transformQuantity?: Maybe<StripePriceTransformQuantity>;
  type?: Maybe<StripePriceType>;
  unitAmount?: Maybe<Scalars['Int']>;
  unitAmountDecimal?: Maybe<Scalars['Float']>;
};

export type StripePriceCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum StripePriceBillingScheme {
  PerUnit = 'per_unit',
  Tiered = 'tiered',
}

export type StripePriceRecurring = {
  __typename?: 'StripePriceRecurring';
  aggregateUsage?: Maybe<StripePriceRecurringAggregateUsage>;
  interval?: Maybe<StripeInterval>;
  intervalCount?: Maybe<Scalars['Int']>;
  usageType?: Maybe<StripePriceRecurringUsageType>;
};

export enum StripePriceRecurringAggregateUsage {
  Sum = 'sum',
  LastDuringPeriod = 'last_during_period',
  LastEver = 'last_ever',
  Max = 'max',
}

export enum StripeInterval {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export enum StripePriceRecurringUsageType {
  Metered = 'metered',
  Licensed = 'licensed',
}

export type StripePriceTier = {
  __typename?: 'StripePriceTier';
  flatAmount?: Maybe<Scalars['Int']>;
  flatAmountDecimal?: Maybe<Scalars['Float']>;
  unitAmount?: Maybe<Scalars['Int']>;
  unitAmountDecimal?: Maybe<Scalars['Float']>;
  upTo?: Maybe<Scalars['Int']>;
};

export enum StripePriceTiersMode {
  Graduated = 'graduated',
  Volume = 'volume',
}

export type StripePriceTransformQuantity = {
  __typename?: 'StripePriceTransformQuantity';
  divideBy?: Maybe<Scalars['Int']>;
  round?: Maybe<StripePriceTransformQuantityRound>;
};

export enum StripePriceTransformQuantityRound {
  Up = 'up',
  Down = 'down',
}

export enum StripePriceType {
  OneTime = 'one_time',
  Recurring = 'recurring',
}

export type StripeInvoice = {
  __typename?: 'StripeInvoice';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  accountCountry?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  amountDue?: Maybe<Scalars['Int']>;
  amountPaid?: Maybe<Scalars['Int']>;
  amountRemaining?: Maybe<Scalars['Int']>;
  applicationFeeAmount?: Maybe<Scalars['Int']>;
  attemptCount?: Maybe<Scalars['Int']>;
  attempted?: Maybe<Scalars['Boolean']>;
  autoAdvance?: Maybe<Scalars['Boolean']>;
  billingReason?: Maybe<StripeBillingReason>;
  charge?: Maybe<StripeCharge>;
  collectionMethod?: Maybe<StripeCollectionMethod>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customFields?: Maybe<Array<Maybe<StripeInvoiceCustomFields>>>;
  customer?: Maybe<StripeCustomer>;
  customerAddress?: Maybe<StripeAddress>;
  customerEmail?: Maybe<Scalars['String']>;
  customerPhone?: Maybe<Scalars['String']>;
  customerShipping?: Maybe<StripeShippingAddress>;
  customerTaxExempt?: Maybe<Scalars['String']>;
  customerTaxIds?: Maybe<Array<Maybe<StripeInvoiceCustomerTaxIds>>>;
  defaultPaymentMethod?: Maybe<StripePaymentMethod>;
  defaultSource?: Maybe<StripeSource>;
  defaultTaxRates?: Maybe<Array<Maybe<StripeTaxRate>>>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  endingBalance?: Maybe<Scalars['Int']>;
  footer?: Maybe<Scalars['String']>;
  hostedInvoiceUrl?: Maybe<Scalars['String']>;
  invoicePdf?: Maybe<Scalars['String']>;
  lines?: Maybe<StripeInvoiceLineItemList>;
  livemode?: Maybe<Scalars['Boolean']>;
  nextPaymentAttempt?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  periodEnd?: Maybe<Scalars['String']>;
  periodStart?: Maybe<Scalars['String']>;
  postPaymentCreditNotesAmount?: Maybe<Scalars['Int']>;
  prePaymentCreditNotesAmount?: Maybe<Scalars['Int']>;
  receiptNumber?: Maybe<Scalars['String']>;
  startingBalance?: Maybe<Scalars['Int']>;
  statementDescriptor?: Maybe<Scalars['String']>;
  status?: Maybe<StripeInvoiceStatus>;
  statusTransitions?: Maybe<StripeStatusTransitions>;
  subscription?: Maybe<StripeSubscription>;
  subscriptionProrationDate?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Int']>;
  tax?: Maybe<Scalars['Int']>;
  thresholdReason?: Maybe<StripeInvoiceThresholdReason>;
  total?: Maybe<Scalars['Int']>;
  totalTaxAmounts?: Maybe<Array<Maybe<StripeTaxAmounts>>>;
  webhooksDeliveredAt?: Maybe<Scalars['String']>;
};

export type StripeInvoiceCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeInvoiceDueDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeInvoiceNextPaymentAttemptArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeInvoiceSubscriptionProrationDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeInvoiceWebhooksDeliveredAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum StripeBillingReason {
  SubscriptionCycle = 'subscription_cycle',
  SubscriptionCreate = 'subscription_create',
  SubscriptionUpdate = 'subscription_update',
  Subscription = 'subscription',
  Manual = 'manual',
  Upcoming = 'upcoming',
  SubscriptionThreshold = 'subscription_threshold',
}

export type StripeInvoiceCustomFields = {
  __typename?: 'StripeInvoiceCustomFields';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type StripeInvoiceCustomerTaxIds = {
  __typename?: 'StripeInvoiceCustomerTaxIds';
  type?: Maybe<StripeInvoiceCustomerTaxIdsType>;
  value?: Maybe<Scalars['String']>;
};

export enum StripeInvoiceCustomerTaxIdsType {
  EuVat = 'eu_vat',
  NzGst = 'nz_gst',
  AuAbn = 'au_abn',
  InGst = 'in_gst',
  NoVat = 'no_vat',
  ZaVat = 'za_vat',
  ChVat = 'ch_vat',
  MxRfc = 'mx_rfc',
  SgUen = 'sg_uen',
  RuInn = 'ru_inn',
  CaBn = 'ca_bn',
  HkBr = 'hk_br',
  EsCif = 'es_cif',
  TwVat = 'tw_vat',
  ThVat = 'th_vat',
  JpCn = 'jp_cn',
  LiUid = 'li_uid',
  MyItn = 'my_itn',
  UsEin = 'us_ein',
  KrBrn = 'kr_brn',
  CaQst = 'ca_qst',
  MySst = 'my_sst',
  SgGst = 'sg_gst',
  Unknown = 'unknown',
}

export type StripeInvoiceLineItemList = {
  __typename?: 'StripeInvoiceLineItemList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeInvoiceLineItem>>>;
};

export type StripeInvoiceLineItem = {
  __typename?: 'StripeInvoiceLineItem';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discountable?: Maybe<Scalars['Boolean']>;
  invoiceItem?: Maybe<Scalars['String']>;
  livemode?: Maybe<Scalars['Boolean']>;
  period?: Maybe<StripeInvoicePeriod>;
  plan?: Maybe<StripePlan>;
  proration?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Int']>;
  subscription?: Maybe<StripeSubscription>;
  subscriptionItem?: Maybe<StripeSubscriptionItem>;
  taxAmounts?: Maybe<Array<Maybe<StripeTaxAmounts>>>;
  taxRates?: Maybe<Array<Maybe<StripeTaxRate>>>;
  type?: Maybe<StripeInvoiceLineItemType>;
  unifiedProration?: Maybe<Scalars['Boolean']>;
};

export type StripeInvoicePeriod = {
  __typename?: 'StripeInvoicePeriod';
  end?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
};

export type StripeInvoicePeriodEndArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeInvoicePeriodStartArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeTaxAmounts = {
  __typename?: 'StripeTaxAmounts';
  amount?: Maybe<Scalars['Int']>;
  inclusive?: Maybe<Scalars['Boolean']>;
  taxRate?: Maybe<StripeTaxRate>;
};

export enum StripeInvoiceLineItemType {
  Invoiceitem = 'invoiceitem',
  Subscription = 'subscription',
}

export enum StripeInvoiceStatus {
  Draft = 'draft',
  Open = 'open',
  Paid = 'paid',
  Uncollectible = 'uncollectible',
  Void = 'void',
}

export type StripeStatusTransitions = {
  __typename?: 'StripeStatusTransitions';
  finalizedAt?: Maybe<Scalars['String']>;
  markedUncollectibleAt?: Maybe<Scalars['String']>;
  paidAt?: Maybe<Scalars['String']>;
  voidedAt?: Maybe<Scalars['String']>;
};

export type StripeStatusTransitionsFinalizedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeStatusTransitionsMarkedUncollectibleAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeStatusTransitionsPaidAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeStatusTransitionsVoidedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeInvoiceThresholdReason = {
  __typename?: 'StripeInvoiceThresholdReason';
  amountGte?: Maybe<Scalars['Int']>;
  itemReasons?: Maybe<Array<Maybe<StripeInvoiceItemReason>>>;
};

export type StripeInvoiceItemReason = {
  __typename?: 'StripeInvoiceItemReason';
  lineItemIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  usageGte?: Maybe<Scalars['Int']>;
};

export type StripeSubscriptionPauseCollection = {
  __typename?: 'StripeSubscriptionPauseCollection';
  behavior?: Maybe<StripePauseCollectionBehavior>;
  resumesAt?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionPauseCollectionResumesAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum StripePauseCollectionBehavior {
  KeepAsDraft = 'keep_as_draft',
  MarkUncollectible = 'mark_uncollectible',
  Void = 'void',
}

export type StripeSubscriptionPendingInvoiceItemInterval = {
  __typename?: 'StripeSubscriptionPendingInvoiceItemInterval';
  intervalCount?: Maybe<Scalars['Int']>;
  interval?: Maybe<StripeInterval>;
};

export type StripeSubscriptionPendingUpdate = {
  __typename?: 'StripeSubscriptionPendingUpdate';
  billingCycleAnchor?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  subscriptionItems?: Maybe<Array<Maybe<StripeSubscriptionItem>>>;
  trialEnd?: Maybe<Scalars['String']>;
  trialFromPlan?: Maybe<Scalars['Boolean']>;
};

export type StripeSubscriptionPendingUpdateBillingCycleAnchorArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionPendingUpdateExpiresAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionPendingUpdateTrialEndArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionSchedule = {
  __typename?: 'StripeSubscriptionSchedule';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  canceledAt?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  currentPhase?: Maybe<StripeSubscriptionScheduleCurrentPhase>;
  customer?: Maybe<StripeCustomer>;
  defaultSettings?: Maybe<StripeSubscriptionScheduleDefaultSettings>;
  endBehavior?: Maybe<Scalars['String']>;
  livemode?: Maybe<Scalars['Boolean']>;
  phases?: Maybe<Array<Maybe<StripeSubscriptionSchedulePhase>>>;
  releasedAt?: Maybe<Scalars['String']>;
  releasedSubscription?: Maybe<StripeSubscription>;
  status?: Maybe<StripeSubscriptionScheduleStatus>;
  subscription?: Maybe<StripeSubscription>;
};

export type StripeSubscriptionScheduleCanceledAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionScheduleCompletedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionScheduleCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionScheduleReleasedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionScheduleCurrentPhase = {
  __typename?: 'StripeSubscriptionScheduleCurrentPhase';
  endDate?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionScheduleCurrentPhaseEndDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionScheduleCurrentPhaseStartDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionScheduleDefaultSettings = {
  __typename?: 'StripeSubscriptionScheduleDefaultSettings';
  billingThresholds?: Maybe<StripeSubscriptionScheduleBillingThresholds>;
  collectionMethod?: Maybe<StripeSubscriptionScheduleCollectionMethod>;
  defaultPaymentMethod?: Maybe<StripePaymentMethod>;
  invoiceSettings?: Maybe<StripeSubscriptionScheduleInvoiceSettings>;
  transferData?: Maybe<StripeSubscriptionScheduleTransferData>;
};

export type StripeSubscriptionScheduleBillingThresholds = {
  __typename?: 'StripeSubscriptionScheduleBillingThresholds';
  amountGte?: Maybe<Scalars['Int']>;
  resetBillingCycleAnchor?: Maybe<Scalars['Boolean']>;
};

export enum StripeSubscriptionScheduleCollectionMethod {
  ChargeAutomatically = 'charge_automatically',
  SendInvoice = 'send_invoice',
}

export type StripeSubscriptionScheduleInvoiceSettings = {
  __typename?: 'StripeSubscriptionScheduleInvoiceSettings';
  daysUntilDue?: Maybe<Scalars['Int']>;
};

export type StripeSubscriptionScheduleTransferData = {
  __typename?: 'StripeSubscriptionScheduleTransferData';
  amountPercent?: Maybe<Scalars['Float']>;
  destination?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionSchedulePhase = {
  __typename?: 'StripeSubscriptionSchedulePhase';
  addIinvoiceItems?: Maybe<Array<Maybe<StripeSubscriptionAddInvoiceItem>>>;
  applicationFeePercent?: Maybe<Scalars['Float']>;
  billingThresholds?: Maybe<StripeSubscriptionScheduleBillingThresholds>;
  collection_method?: Maybe<StripeSubscriptionScheduleCollectionMethod>;
  coupon?: Maybe<StripeCoupon>;
  defaultPaymentMethod?: Maybe<StripePaymentMethod>;
  defaultTaxRates?: Maybe<Array<Maybe<StripeTaxRate>>>;
  endDate?: Maybe<Scalars['String']>;
  invoiceSettings?: Maybe<StripeSubscriptionScheduleInvoiceSettings>;
  plans?: Maybe<Array<Maybe<StripeSubscriptionSchedulePlan>>>;
  prorate?: Maybe<Scalars['Boolean']>;
  prorationBehavior?: Maybe<StripeProrationBehavior>;
  startDate?: Maybe<Scalars['String']>;
  trialEnd?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionSchedulePhaseEndDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionSchedulePhaseStartDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionSchedulePhaseTrialEndArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionAddInvoiceItem = {
  __typename?: 'StripeSubscriptionAddInvoiceItem';
  price?: Maybe<StripePrice>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StripeCoupon = {
  __typename?: 'StripeCoupon';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amountOff?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  duration?: Maybe<StripeCouponDuration>;
  durationInMonths?: Maybe<Scalars['Int']>;
  livemode?: Maybe<Scalars['Boolean']>;
  maxRedemptions?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  percentOff?: Maybe<Scalars['Float']>;
  redeemBy?: Maybe<Scalars['Int']>;
  valid?: Maybe<Scalars['Boolean']>;
};

export type StripeCouponCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum StripeCouponDuration {
  Forever = 'forever',
  Once = 'once',
  Repeating = 'repeating',
}

export type StripeSubscriptionSchedulePlan = {
  __typename?: 'StripeSubscriptionSchedulePlan';
  billingThresholds?: Maybe<StripeSubscriptionSchedulePlanThresholds>;
  plan?: Maybe<StripePlan>;
  price?: Maybe<StripePrice>;
  quantity?: Maybe<Scalars['Int']>;
  taxRates?: Maybe<Array<Maybe<StripeTaxRate>>>;
};

export type StripeSubscriptionSchedulePlanThresholds = {
  __typename?: 'StripeSubscriptionSchedulePlanThresholds';
  usageGte?: Maybe<Scalars['Int']>;
};

export enum StripeProrationBehavior {
  CreateProrations = 'create_prorations',
  None = 'none',
}

export enum StripeSubscriptionScheduleStatus {
  NotStarted = 'not_started',
  Active = 'active',
  Completed = 'completed',
  Released = 'released',
  Canceled = 'canceled',
}

export enum StripeSubscriptionStatus {
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  Trialing = 'trialing',
  Active = 'active',
  PastDue = 'past_due',
  Canceled = 'canceled',
  Unpaid = 'unpaid',
}

export enum StripeCustomerTaxExempt {
  None = 'none',
  Exempt = 'exempt',
  Reverse = 'reverse',
}

export enum StripeFlow {
  Redirect = 'redirect',
  Receiver = 'receiver',
  CodeVerification = 'code_verification',
  None = 'none',
}

export type StripeOwner = {
  __typename?: 'StripeOwner';
  address?: Maybe<StripeAddress>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  verifiedAddress?: Maybe<StripeAddress>;
  verifiedEmail?: Maybe<Scalars['String']>;
  verifiedName?: Maybe<Scalars['String']>;
  verifiedPhone?: Maybe<Scalars['String']>;
};

export type StripeReceiver = {
  __typename?: 'StripeReceiver';
  address?: Maybe<StripeAddress>;
  amountCharged?: Maybe<Scalars['Int']>;
  amountReceived?: Maybe<Scalars['Int']>;
  amountReturned?: Maybe<Scalars['Int']>;
  refundAttributesMethod?: Maybe<StripeRefundAttributesMethod>;
  refundAttributesStatus?: Maybe<StripeRefundAttributesStatus>;
};

export enum StripeRefundAttributesMethod {
  Email = 'email',
  Manual = 'manual',
  None = 'none',
}

export enum StripeRefundAttributesStatus {
  Missing = 'missing',
  Requested = 'requested',
  Available = 'available',
}

export type StripeRedirect = {
  __typename?: 'StripeRedirect';
  failureReason?: Maybe<StripeRedirectFailureReason>;
  returnUrl?: Maybe<Scalars['String']>;
  status?: Maybe<StripeRedirectStatus>;
  url?: Maybe<Scalars['String']>;
};

export enum StripeRedirectFailureReason {
  UserAbort = 'user_abort',
  Declined = 'declined',
  ProcessingError = 'processing_error',
  Failed = 'failed',
}

export enum StripeRedirectStatus {
  Pending = 'pending',
  Succeeded = 'succeeded',
  NotRequired = 'not_required',
  Failed = 'failed',
}

export type StripeSourceOrder = {
  __typename?: 'StripeSourceOrder';
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<StripeSourceOrderItems>>>;
  shipping?: Maybe<StripeShipping>;
};

export type StripeSourceOrderItems = {
  __typename?: 'StripeSourceOrderItems';
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  type?: Maybe<StripeSourceOrderItemsType>;
};

export enum StripeSourceOrderItemsType {
  Sku = 'sku',
  Tax = 'tax',
  Shipping = 'shipping',
}

export enum StripeSourceStatus {
  Canceled = 'canceled',
  Chargeable = 'chargeable',
  Consumed = 'consumed',
  Failed = 'failed',
  Pending = 'pending',
}

export enum StripeSourceType {
  AchCreditTransfer = 'ach_credit_transfer',
  AchDebit = 'ach_debit',
  Alipay = 'alipay',
  Bancontact = 'bancontact',
  Card = 'card',
  CardPresent = 'card_present',
  Eps = 'eps',
  Giropay = 'giropay',
  Ideal = 'ideal',
  Multibanco = 'multibanco',
  Klarna = 'klarna',
  P24 = 'p24',
  SepaDebit = 'sepa_debit',
  Sofort = 'sofort',
  ThreeDSecure = 'three_d_secure',
  Wechat = 'wechat',
}

export enum StripeSourceUsage {
  Reusable = 'reusable',
  SingleUse = 'single_use',
}

export enum StripeBalanceTransactionType {
  Adjustment = 'adjustment',
  Advance = 'advance',
  AdvanceFunding = 'advance_funding',
  ApplicationFee = 'application_fee',
  ApplicationFeeRefund = 'application_fee_refund',
  Charge = 'charge',
  ConnectCollectionTransfer = 'connect_collection_transfer',
  IssuingAuthorizationHold = 'issuing_authorization_hold',
  IssuingAuthorizationRelease = 'issuing_authorization_release',
  IssuingTransaction = 'issuing_transaction',
  Payment = 'payment',
  PaymentFailureRefund = 'payment_failure_refund',
  PaymentRefund = 'payment_refund',
  Payout = 'payout',
  PayoutCancel = 'payout_cancel',
  PayoutFailure = 'payout_failure',
  Refund = 'refund',
  RefundFailure = 'refund_failure',
  ReserveTransaction = 'reserve_transaction',
  ReservedFunds = 'reserved_funds',
  StripeFee = 'stripe_fee',
  StripeFxFee = 'stripe_fx_fee',
  TaxFee = 'tax_fee',
  Topup = 'topup',
  TopupReversal = 'topup_reversal',
  Transfer = 'transfer',
  TransferCancel = 'transfer_cancel',
  TransferFailure = 'transfer_failure',
  TransferRefund = 'transfer_refund',
}

export enum StripeReportingCategory {
  Charge = 'charge',
  ChargeFailure = 'charge_failure',
  Dispute = 'dispute',
  DisputeReversal = 'dispute_reversal',
  PartialCaptureReversal = 'partial_capture_reversal',
  Refund = 'refund',
  RefundFailure = 'refund_failure',
  AnticipationRepayment = 'anticipation_repayment',
  Fee = 'fee',
  OtherAdjustment = 'other_adjustment',
  Payout = 'payout',
  PayoutReversal = 'payout_reversal',
  RiskReservedFunds = 'risk_reserved_funds',
  Tax = 'tax',
  Topup = 'topup',
  TopupReversal = 'topup_reversal',
  IssuingAuthorizationHold = 'issuing_authorization_hold',
  IssuingAuthorizationRelease = 'issuing_authorization_release',
  IssuingDispute = 'issuing_dispute',
  IssuingTransaction = 'issuing_transaction',
  Advance = 'advance',
  AdvanceFunding = 'advance_funding',
  ConnectCollectionTransfer = 'connect_collection_transfer',
  ConnectReservedFunds = 'connect_reserved_funds',
  PlatformEarning = 'platform_earning',
  PlatformEarningRefund = 'platform_earning_refund',
  Transfer = 'transfer',
  TransferReversal = 'transfer_reversal',
}

export type StripeBalanceTransactionListInput = {
  availableOn?: Maybe<StripeDateFilterInput>;
  created?: Maybe<StripeDateFilterInput>;
  currency?: Maybe<Scalars['String']>;
  payout?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<StripeBalanceTransactionType>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeDateFilterInput = {
  eq?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
};

export type StripeBalanceTransactionList = {
  __typename?: 'StripeBalanceTransactionList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeBalanceTransaction>>>;
};

export type StripeChargeListInput = {
  created?: Maybe<StripeDateFilterInput>;
  customer?: Maybe<Scalars['String']>;
  paymentIntent?: Maybe<Scalars['String']>;
  transferGroup?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeChargeList = {
  __typename?: 'StripeChargeList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeCharge>>>;
};

export type StripeCustomerListInput = {
  created?: Maybe<StripeDateFilterInput>;
  email?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeCustomerList = {
  __typename?: 'StripeCustomerList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeCustomer>>>;
};

export type StripeDispute = {
  __typename?: 'StripeDispute';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  balanceTransactions?: Maybe<Array<Maybe<StripeBalanceTransaction>>>;
  charge?: Maybe<StripeCharge>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  evidence?: Maybe<StripeDisputeEvidence>;
  evidenceDetails?: Maybe<StripeEvidenceDetails>;
  isChargeRefundable?: Maybe<Scalars['Boolean']>;
  livemode?: Maybe<Scalars['Boolean']>;
  reason?: Maybe<StripeDisputeReason>;
  status?: Maybe<StripeDisputeStatus>;
};

export type StripeDisputeCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeDisputeEvidence = {
  __typename?: 'StripeDisputeEvidence';
  accessActivityLog?: Maybe<Scalars['String']>;
  billingAddress?: Maybe<Scalars['String']>;
  cancellationPolicy?: Maybe<Scalars['String']>;
  cancellationPolicyDisclosure?: Maybe<Scalars['String']>;
  cancellationRebuttal?: Maybe<Scalars['String']>;
  customerCommunication?: Maybe<Scalars['String']>;
  customerEmailAddress?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  customerPurchaseIP?: Maybe<Scalars['String']>;
  customerSignature?: Maybe<Scalars['String']>;
  duplicateChargeDocumentation?: Maybe<Scalars['String']>;
  duplicateChargeExplanation?: Maybe<Scalars['String']>;
  duplicateChargeId?: Maybe<Scalars['String']>;
  productDescription?: Maybe<Scalars['String']>;
  receipt?: Maybe<Scalars['String']>;
  refundPolicy?: Maybe<Scalars['String']>;
  refundPolicyDisclosure?: Maybe<Scalars['String']>;
  refundRefusalExplanation?: Maybe<Scalars['String']>;
  serviceDate?: Maybe<Scalars['String']>;
  serviceDocumentation?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<Scalars['String']>;
  shippingCarrier?: Maybe<Scalars['String']>;
  shippingDate?: Maybe<Scalars['String']>;
  shippingDocumentation?: Maybe<Scalars['String']>;
  shippingTrackingNumber?: Maybe<Scalars['String']>;
  uncategorizedFile?: Maybe<Scalars['String']>;
  uncategorizedText?: Maybe<Scalars['String']>;
};

export type StripeEvidenceDetails = {
  __typename?: 'StripeEvidenceDetails';
  dueBy?: Maybe<Scalars['String']>;
  hasEvidence?: Maybe<Scalars['Boolean']>;
  pastDue?: Maybe<Scalars['Boolean']>;
  submissionCount?: Maybe<Scalars['Int']>;
};

export type StripeEvidenceDetailsDueByArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum StripeDisputeReason {
  BankCannotProcess = 'bank_cannot_process',
  CheckReturned = 'check_returned',
  CreditNotProcessed = 'credit_not_processed',
  CustomerInitiated = 'customer_initiated',
  DebitNotAuthorized = 'debit_not_authorized',
  Duplicate = 'duplicate',
  Fraudulent = 'fraudulent',
  General = 'general',
  IncorrectAccountDetails = 'incorrect_account_details',
  InsufficientFunds = 'insufficient_funds',
  ProductNotReceived = 'product_not_received',
  ProductUnacceptable = 'product_unacceptable',
  SubscriptionCanceled = 'subscription_canceled',
  Unrecognized = 'unrecognized',
}

export enum StripeDisputeStatus {
  WarningNeedsResponse = 'warning_needs_response',
  WarningUnderReview = 'warning_under_review',
  WarningClosed = 'warning_closed',
  NeedsResponse = 'needs_response',
  UnderReview = 'under_review',
  ChargeRefunded = 'charge_refunded',
  Won = 'won',
  Lost = 'lost',
}

export type StripeDisputeListInput = {
  created?: Maybe<StripeDateFilterInput>;
  charge?: Maybe<Scalars['String']>;
  paymentIntent?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeDisputeList = {
  __typename?: 'StripeDisputeList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeDispute>>>;
};

export type StripeEvent = {
  __typename?: 'StripeEvent';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  apiVersion?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  data?: Maybe<StripeEventData>;
  livemode?: Maybe<Scalars['Boolean']>;
  pendingWebhooks?: Maybe<Scalars['Int']>;
  request?: Maybe<StripeEventRequest>;
  type?: Maybe<Scalars['String']>;
};

export type StripeEventCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeEventData = {
  __typename?: 'StripeEventData';
  /** Returns the Stripe Event as a Union data type. Events without a supported data type are returned as StripeOtherEvent */
  object?: Maybe<StripeEventObject>;
  previousAttributes?: Maybe<Scalars['String']>;
};

export type StripeEventObject =
  | StripeDispute
  | StripeBalance
  | StripeBankAccount
  | StripeCard
  | StripeCharge
  | StripeCoupon
  | StripeCreditNote
  | StripeCustomer
  | StripeInvoiceItem
  | StripeInvoice
  | StripePaymentMethod
  | StripePayout
  | StripePlan
  | StripePrice
  | StripeProduct
  | StripeRefund
  | StripeSource
  | StripeSubscription
  | StripeSubscriptionSchedule
  | StripeTaxRate
  | StripeOtherEvent;

export type StripeBankAccount = {
  __typename?: 'StripeBankAccount';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  accountHolderName?: Maybe<Scalars['String']>;
  accountHolderType?: Maybe<StripeAccountHolderType>;
  bankName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<StripeCustomer>;
  fingerprint?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  routingNumber?: Maybe<Scalars['String']>;
  status?: Maybe<StripeBankAccountStatus>;
};

export enum StripeAccountHolderType {
  Individual = 'individual',
  Company = 'company',
}

export enum StripeBankAccountStatus {
  New = 'new',
  Validated = 'validated',
  Verified = 'verified',
  VerificationFailed = 'verification_failed',
  Errored = 'errored',
}

export type StripeCard = {
  __typename?: 'StripeCard';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  addressCity?: Maybe<Scalars['String']>;
  addressCountry?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine1Check?: Maybe<StripeCardCheck>;
  addressLine2?: Maybe<Scalars['String']>;
  addressState?: Maybe<Scalars['String']>;
  addressZip?: Maybe<Scalars['String']>;
  addressZipCheck?: Maybe<StripeCardCheck>;
  availablePayoutMethods?: Maybe<Array<Maybe<StripeAvailablePayoutMethods>>>;
  brand?: Maybe<StripeCardBrand>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<StripeCustomer>;
  cvcCheck?: Maybe<StripeCardCheck>;
  dynamicLast4?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  funding?: Maybe<StripeCardFunding>;
  last4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  tokenizationMethod?: Maybe<StripeTokenizationMethod>;
};

export enum StripeAvailablePayoutMethods {
  Standard = 'standard',
  Instant = 'instant',
}

export enum StripeCardBrand {
  American = 'American',
  Express = 'Express',
  Diners = 'Diners',
  Club = 'Club',
  Discover = 'Discover',
  Jcb = 'JCB',
  MasterCard = 'MasterCard',
  UnionPay = 'UnionPay',
  Visa = 'Visa',
  Unknown = 'Unknown',
}

export enum StripeTokenizationMethod {
  ApplePay = 'apple_pay',
  GooglePay = 'google_pay',
}

export type StripeCreditNote = {
  __typename?: 'StripeCreditNote';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<StripeCustomer>;
  customerBalanceTransaction?: Maybe<StripeBalanceTransaction>;
  invoice?: Maybe<StripeInvoice>;
  livemode?: Maybe<Scalars['Boolean']>;
  lines?: Maybe<StripeCreditNoteLineItemList>;
  memo?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  reason?: Maybe<StripeCreditNoteReason>;
  refund?: Maybe<StripeRefund>;
  subtotal?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  discountAmount?: Maybe<Scalars['Int']>;
  outOfBandAmount?: Maybe<Scalars['Int']>;
  taxAmounts?: Maybe<Array<Maybe<StripeTaxAmount>>>;
  status?: Maybe<StripeCreditNoteStatus>;
  type?: Maybe<StripeCreditNoteType>;
  voidedAt?: Maybe<Scalars['String']>;
};

export type StripeCreditNoteCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeCreditNoteVoidedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripeCreditNoteLineItemList = {
  __typename?: 'StripeCreditNoteLineItemList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeCreditNoteLineItem>>>;
};

export type StripeCreditNoteLineItem = {
  __typename?: 'StripeCreditNoteLineItem';
  id?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Int']>;
  invoiceLineItem?: Maybe<Scalars['String']>;
  livemode?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Int']>;
  taxAmounts?: Maybe<Array<Maybe<StripeTaxAmount>>>;
  taxRates?: Maybe<Array<Maybe<StripeTaxRate>>>;
  type?: Maybe<StripeCreditNoteLineItemType>;
  unitAamount?: Maybe<Scalars['Int']>;
  unitAmountDecimal?: Maybe<Scalars['Float']>;
};

export type StripeTaxAmount = {
  __typename?: 'StripeTaxAmount';
  amount?: Maybe<Scalars['Int']>;
  inclusive?: Maybe<Scalars['Boolean']>;
  taxRate?: Maybe<StripeTaxRate>;
};

export enum StripeCreditNoteLineItemType {
  InvoiceLineItem = 'invoice_line_item',
  CustomLineItem = 'custom_line_item',
}

export enum StripeCreditNoteReason {
  Duplicate = 'duplicate',
  Fraudulent = 'fraudulent',
  OrderChange = 'order_change',
  ProductUnsatisfactory = 'product_unsatisfactory',
}

export type StripeRefund = {
  __typename?: 'StripeRefund';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  balanceTransaction?: Maybe<StripeBalanceTransaction>;
  charge?: Maybe<StripeCharge>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  failureBalanceTransaction?: Maybe<StripeBalanceTransaction>;
  failureReason?: Maybe<StripeRefundFailureReason>;
  reason?: Maybe<StripeRefundReason>;
  receiptNumber?: Maybe<Scalars['String']>;
  sourceTransferReversal?: Maybe<Scalars['String']>;
  status?: Maybe<StripeRefundStatus>;
  transferReversal?: Maybe<Scalars['String']>;
};

export type StripeRefundCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum StripeRefundFailureReason {
  LostOrStolenCard = 'lost_or_stolen_card',
  ExpiredOrCanceledCard = 'expired_or_canceled_card',
  Unknown = 'unknown',
}

export enum StripeRefundReason {
  Duplicate = 'duplicate',
  Fraudulent = 'fraudulent',
  RequestedByCustomer = 'requested_by_customer',
}

export enum StripeRefundStatus {
  Pending = 'pending',
  Succeeded = 'succeeded',
  Failed = 'failed',
  Canceled = 'canceled',
}

export enum StripeCreditNoteStatus {
  Issued = 'issued',
  Void = 'void',
}

export enum StripeCreditNoteType {
  PostPayment = 'post_payment',
  PrePayment = 'pre_payment',
}

export type StripeInvoiceItem = {
  __typename?: 'StripeInvoiceItem';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<StripeCustomer>;
  date?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discountable?: Maybe<Scalars['Boolean']>;
  invoice?: Maybe<StripeInvoice>;
  livemode?: Maybe<Scalars['Boolean']>;
  period?: Maybe<StripeInvoicePeriod>;
  plan?: Maybe<StripePlan>;
  price?: Maybe<StripePrice>;
  proration?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Int']>;
  subscription?: Maybe<StripeSubscription>;
  subscriptionItem?: Maybe<StripeSubscriptionItem>;
  taxRates?: Maybe<Array<Maybe<StripeTaxRate>>>;
  unifiedProration?: Maybe<Scalars['Boolean']>;
  unitAmount?: Maybe<Scalars['Int']>;
  unitAmountDecimal?: Maybe<Scalars['Float']>;
};

export type StripeInvoiceItemDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripePayout = {
  __typename?: 'StripePayout';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  arrivalDate?: Maybe<Scalars['String']>;
  automatic?: Maybe<Scalars['Boolean']>;
  balanceTransaction?: Maybe<StripeBalanceTransaction>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  failureBalanceTransaction?: Maybe<StripeBalanceTransaction>;
  failureCode?: Maybe<Scalars['String']>;
  failureMessage?: Maybe<Scalars['String']>;
  livemode?: Maybe<Scalars['Boolean']>;
  method?: Maybe<StripePayoutMethod>;
  sourceType?: Maybe<StripePayoutType>;
  statementDescriptor?: Maybe<Scalars['String']>;
  status?: Maybe<StripePayoutStatus>;
  type?: Maybe<StripePayoutType>;
};

export type StripePayoutArrivalDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type StripePayoutCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum StripePayoutMethod {
  Instant = 'instant',
  Standard = 'standard',
}

export enum StripePayoutType {
  Card = 'card',
  BankAccount = 'bank_account',
}

export enum StripePayoutStatus {
  Paid = 'paid',
  Pending = 'pending',
  InTransit = 'in_transit',
  Canceled = 'canceled',
  Failed = 'failed',
}

export type StripeOtherEvent = {
  __typename?: 'StripeOtherEvent';
  eventData?: Maybe<Scalars['JSON']>;
};

export type StripeEventRequest = {
  __typename?: 'StripeEventRequest';
  id?: Maybe<Scalars['String']>;
  idempotencyKey?: Maybe<Scalars['String']>;
};

export type StripeEventListInput = {
  created?: Maybe<StripeDateFilterInput>;
  deliverySuccess?: Maybe<Scalars['Boolean']>;
  pagination?: Maybe<PaginationInput>;
  type?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StripeEventList = {
  __typename?: 'StripeEventList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeEvent>>>;
};

export type StripePayoutListInput = {
  arrivalDate?: Maybe<StripeDateFilterInput>;
  created?: Maybe<StripeDateFilterInput>;
  destination?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationInput>;
  status?: Maybe<Scalars['String']>;
};

export type StripePayoutList = {
  __typename?: 'StripePayoutList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripePayout>>>;
};

export type StripeProductListInput = {
  active?: Maybe<Scalars['Boolean']>;
  created?: Maybe<StripeDateFilterInput>;
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  shippable?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeProductList = {
  __typename?: 'StripeProductList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeProduct>>>;
};

export type StripePriceListInput = {
  active?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  type?: Maybe<StripePriceType>;
  created?: Maybe<StripeDateFilterInput>;
  lookupKeys?: Maybe<Array<Maybe<Scalars['String']>>>;
  recurring?: Maybe<StripeRecurringInput>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeRecurringInput = {
  interval?: Maybe<StripeInterval>;
  usageType?: Maybe<StripePriceRecurringUsageType>;
};

export type StripePriceList = {
  __typename?: 'StripePriceList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripePrice>>>;
};

export type StripeRefundListInput = {
  charge?: Maybe<Scalars['String']>;
  created?: Maybe<StripeDateFilterInput>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeRefundList = {
  __typename?: 'StripeRefundList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeRefund>>>;
};

export type StripePaymentMethodListInput = {
  customer: Scalars['String'];
  type: Scalars['String'];
  pagination?: Maybe<PaginationInput>;
};

export type StripePaymentMethodList = {
  __typename?: 'StripePaymentMethodList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripePaymentMethod>>>;
};

export type StripeBankAccountInput = {
  id: Scalars['ID'];
  customer: Scalars['String'];
};

export type StripeBankAccountListInput = {
  customer: Scalars['String'];
  pagination?: Maybe<PaginationInput>;
};

export type StripeBankAccountList = {
  __typename?: 'StripeBankAccountList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeBankAccount>>>;
};

export type StripeCardInput = {
  id: Scalars['String'];
  customer: Scalars['String'];
};

export type StripeCardListInput = {
  customer: Scalars['String'];
  pagination?: Maybe<PaginationInput>;
};

export type StripeCardList = {
  __typename?: 'StripeCardList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeCard>>>;
};

export type StripeSourceInput = {
  id: Scalars['String'];
  clientSecret?: Maybe<Scalars['String']>;
};

export type StripeCouponListInput = {
  create?: Maybe<StripeDateFilterInput>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeCouponList = {
  __typename?: 'StripeCouponList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeCoupon>>>;
};

export type StripeCreditNoteListInput = {
  customer?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationInput>;
  invoice?: Maybe<Scalars['String']>;
};

export type StripeCreditNoteList = {
  __typename?: 'StripeCreditNoteList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeCreditNote>>>;
};

export type StripeCreditNoteLineItemListInput = {
  creditNoteId: Scalars['String'];
  pagination?: Maybe<PaginationInput>;
};

export type StripeInvoiceListInput = {
  collectionMethod?: Maybe<StripeCollectionMethod>;
  created?: Maybe<StripeDateFilterInput>;
  customer?: Maybe<Scalars['String']>;
  dueDate?: Maybe<StripeDateFilterInput>;
  status?: Maybe<StripeInvoiceStatus>;
  subscription?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeInvoiceList = {
  __typename?: 'StripeInvoiceList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeInvoice>>>;
};

export type StripeInvoiceItemListInput = {
  created?: Maybe<StripeDateFilterInput>;
  customer?: Maybe<Scalars['String']>;
  invoice?: Maybe<Scalars['String']>;
  pending?: Maybe<Scalars['Boolean']>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeInvoiceItemList = {
  __typename?: 'StripeInvoiceItemList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeInvoiceItem>>>;
};

export type StripePlanListInput = {
  active?: Maybe<Scalars['Boolean']>;
  created?: Maybe<StripeDateFilterInput>;
  product?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationInput>;
};

export type StripePlanList = {
  __typename?: 'StripePlanList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripePlan>>>;
};

export type StripeSubscriptionListInput = {
  collectionMethod?: Maybe<StripeCollectionMethod>;
  created?: Maybe<StripeDateFilterInput>;
  currentPeriodEnd?: Maybe<StripeDateFilterInput>;
  currentPeriodStart?: Maybe<StripeDateFilterInput>;
  customer?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  status?: Maybe<StripeSubscriptionStatus>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeSubscriptionItemListInput = {
  subscription: Scalars['String'];
  pagination?: Maybe<PaginationInput>;
};

export type StripeSubscriptionScheduleListInput = {
  pagination?: Maybe<PaginationInput>;
  customer?: Maybe<Scalars['String']>;
  completedAt?: Maybe<StripeDateFilterInput>;
  create?: Maybe<StripeDateFilterInput>;
  endingBefore?: Maybe<StripeDateFilterInput>;
  releasedAt?: Maybe<StripeDateFilterInput>;
  scheduled?: Maybe<Scalars['Boolean']>;
  canceledAt?: Maybe<StripeDateFilterInput>;
};

export type StripeSubscriptionScheduleList = {
  __typename?: 'StripeSubscriptionScheduleList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeSubscriptionSchedule>>>;
};

export type StripeTaxRateListInput = {
  active?: Maybe<Scalars['Boolean']>;
  created?: Maybe<StripeDateFilterInput>;
  inclusive?: Maybe<Scalars['Boolean']>;
  pagination?: Maybe<PaginationInput>;
};

export type StripeTaxRateList = {
  __typename?: 'StripeTaxRateList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeTaxRate>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  postmark: PostmarkMutation;
};

export type PostmarkMutation = {
  __typename?: 'PostmarkMutation';
  /** Sends an email using postmark */
  sendEmail?: Maybe<PostmarkEmailResponse>;
  /** Sends batch emails using postmark */
  sendBatchEmails?: Maybe<Array<Maybe<PostmarkEmailResponse>>>;
  /** Sends an email using a predefined Template */
  sendTemplateEmail?: Maybe<PostmarkEmailResponse>;
  /** Sends batch emails using a predefined Template */
  sendBatchTemplateEmails?: Maybe<Array<Maybe<PostmarkEmailResponse>>>;
  /** activate a bounce */
  activateBounce?: Maybe<PostmarkBounceActivate>;
};

export type PostmarkMutationSendEmailArgs = {
  input: PostmarkEmailInput;
};

export type PostmarkMutationSendBatchEmailsArgs = {
  input: Array<Maybe<PostmarkEmailInput>>;
};

export type PostmarkMutationSendTemplateEmailArgs = {
  input: PostmarkEmailTemplateInput;
};

export type PostmarkMutationSendBatchTemplateEmailsArgs = {
  input: PostmarkEmailTemplateBatchInput;
};

export type PostmarkMutationActivateBounceArgs = {
  id: Scalars['ID'];
};

export type PostmarkEmailInput = {
  from: Scalars['String'];
  to: Scalars['String'];
  cc?: Maybe<Scalars['String']>;
  bcc?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  htmlBody: Scalars['String'];
  textBody: Scalars['String'];
  replyTo?: Maybe<Scalars['String']>;
  headers?: Maybe<Array<Maybe<PostmarkEmailHeaderInput>>>;
  trackOpens?: Maybe<Scalars['Boolean']>;
  trackLinks?: Maybe<PostmarkTrackLink>;
  attachments?: Maybe<Array<Maybe<PostmarkEmailAttachmentInput>>>;
  messageStream?: Maybe<Scalars['String']>;
};

export type PostmarkEmailHeaderInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PostmarkEmailAttachmentInput = {
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type PostmarkEmailResponse = {
  __typename?: 'PostmarkEmailResponse';
  to?: Maybe<Scalars['String']>;
  submittedAt?: Maybe<Scalars['String']>;
  messageID?: Maybe<Scalars['ID']>;
  errorCode?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type PostmarkEmailResponseSubmittedAtArgs = {
  format?: Maybe<Scalars['String']>;
};

export type PostmarkEmailTemplateInput = {
  templateId?: Maybe<Scalars['Int']>;
  templateAlias?: Maybe<Scalars['String']>;
  templateModel: Scalars['JSON'];
  inlineCss?: Maybe<Scalars['Boolean']>;
  from: Scalars['String'];
  to: Scalars['String'];
  cc?: Maybe<Scalars['String']>;
  bcc?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  replyTo?: Maybe<Scalars['String']>;
  headers?: Maybe<Array<Maybe<PostmarkEmailHeaderInput>>>;
  trackOpens?: Maybe<Scalars['Boolean']>;
  trackLinks?: Maybe<PostmarkTrackLink>;
  attachments?: Maybe<Array<Maybe<PostmarkEmailAttachmentInput>>>;
  Metadata?: Maybe<Scalars['JSON']>;
};

export type PostmarkEmailTemplateBatchInput = {
  messages: Array<Maybe<PostmarkEmailTemplateInput>>;
};

export type PostmarkBounceActivate = {
  __typename?: 'PostmarkBounceActivate';
  message?: Maybe<Scalars['String']>;
  bounce?: Maybe<PostmarkBounce>;
};

export enum StripeAchDebitTransferAccountHolderType {
  Individual = 'individual',
  Company = 'company',
}

export type StripeAddressInput = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export enum StripeBalanceTransactionStatus {
  Available = 'available',
  Pending = 'pending',
}

export type StripeCustomerInput = {
  address?: Maybe<StripeAddressInput>;
  balance?: Maybe<Scalars['Int']>;
  coupon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  invoicePrefix?: Maybe<Scalars['String']>;
  invoiceSettings?: Maybe<StripeInvoiceSettingsInput>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferredLocals?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipping?: Maybe<StripeShippingAddressInput>;
  source?: Maybe<Scalars['String']>;
  taxExempt?: Maybe<Scalars['String']>;
  taxIdData?: Maybe<StripeTaxIdDataInput>;
};

export type StripeInvoiceSettingsInput = {
  customFields?: Maybe<Array<Maybe<StripeInvoiceSettingsCustomInput>>>;
  defaultPaymentMethod?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
};

export type StripeInvoiceSettingsCustomInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type StripeShippingAddressInput = {
  address?: Maybe<StripeAddressInput>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type StripeTaxIdDataInput = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type StripeCustomerTaxId = {
  __typename?: 'StripeCustomerTaxId';
  id?: Maybe<Scalars['ID']>;
  object?: Maybe<Scalars['String']>;
  type?: Maybe<StripeCustomerTaxIdType>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  customer?: Maybe<StripeCustomer>;
  livemode?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  verification?: Maybe<StripeTaxIdVerification>;
};

export type StripeCustomerTaxIdCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum StripeCustomerTaxIdType {
  AeTrn = 'ae_trn',
  AuAbn = 'au_abn',
  BrCnpj = 'br_cnpj',
  BrCpf = 'br_cpf',
  CaBn = 'ca_bn',
  CaQst = 'ca_qst',
  ChVat = 'ch_vat',
  ClTin = 'cl_tin',
  EsCif = 'es_cif',
  EuVat = 'eu_vat',
  HkBr = 'hk_br',
  InGst = 'in_gst',
  JpCn = 'jp_cn',
  KrBrn = 'kr_brn',
  LiUid = 'li_uid',
  MxRfc = 'mx_rfc',
  MyItn = 'my_itn',
  MySst = 'my_sst',
  NoVat = 'no_vat',
  NzGst = 'nz_gst',
  RuInn = 'ru_inn',
  SaVat = 'sa_vat',
  SgGst = 'sg_gst',
  SgUen = 'sg_uen',
  ThVat = 'th_vat',
  TwVat = 'tw_vat',
  UsEin = 'us_ein',
  ZaVat = 'za_vat',
  Unknown = 'unknown',
}

export type StripeTaxIdVerification = {
  __typename?: 'StripeTaxIdVerification';
  status?: Maybe<StripeTaxIdVerificationStatus>;
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum StripeTaxIdVerificationStatus {
  Pending = 'pending',
  Verified = 'verified',
  Unverified = 'unverified',
  Unavailable = 'unavailable',
}

export type StripeCustomerTaxIdList = {
  __typename?: 'StripeCustomerTaxIdList';
  object?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  data?: Maybe<Array<Maybe<StripeCustomerTaxId>>>;
};

export enum StripeFraudDetailsUserReport {
  Fraudulent = 'fraudulent',
  Safe = 'safe',
}

export type StripeMetaData = {
  __typename?: 'StripeMetaData';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum StripePaymentMethodDetailsType {
  AchCreditTransfer = 'ach_credit_transfer',
  AchDebit = 'ach_debit',
  Alipay = 'alipay',
  AuBecsDebit = 'au_becs_debit',
  Bancontact = 'bancontact',
  Card = 'card',
  CardPresent = 'card_present',
  Eps = 'eps',
  Giropay = 'giropay',
  Ideal = 'ideal',
  Klarna = 'klarna',
  Multibanco = 'multibanco',
  P24 = 'p24',
  SepaDebit = 'sepa_debit',
  Sofort = 'sofort',
  StripeAccount = 'stripe_account',
  Wechat = 'wechat',
}

export type GetCustomersQueryVariables = Exact<{
  startingAfter?: Maybe<Scalars['String']>;
}>;

export type GetCustomersQuery = { __typename?: 'Query' } & {
  stripe: { __typename?: 'StripeQuery' } & {
    customers?: Maybe<
      { __typename?: 'StripeCustomerList' } & {
        data?: Maybe<
          Array<Maybe<{ __typename?: 'StripeCustomer' } & Pick<StripeCustomer, 'created'>>>
        >;
        pageInfo?: Maybe<
          { __typename?: 'PageInfo' } & Pick<
            PageInfo,
            'totalRecords' | 'hasMore' | 'endCursor' | 'startCursor'
          >
        >;
      }
    >;
  };
};
