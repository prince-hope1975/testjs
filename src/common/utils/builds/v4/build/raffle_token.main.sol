// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  uint256 _Some;
  }
enum _enum_T1 {None, Some}
struct T1 {
  _enum_T1 which;
  bool _None;
  bool _Some;
  }
struct T2 {
  uint256 _amountOfRaffleToken;
  address payable _asset;
  uint256 _cost;
  address payable _creator;
  uint256 _deadline;
  bool _isFeatured;
  uint256 _maxEntries;
  uint256 _numberOfTickets;
  bytes30 _projectName;
  address payable _raffleToken;
  }
enum _enum_T3 {None, Some}
struct T3 {
  _enum_T3 which;
  bool _None;
  address payable _Some;
  }
struct T5 {
  uint256 _bal;
  uint256 _currentUserNumber;
  bool _keepGoing;
  uint256 _percent;
  uint256 _raffleBal;
  uint256 _ticketsLeft;
  T3 _winner;
  }
struct T6 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T8 {
  address payable v2395;
  bytes30 v2396;
  address payable v2397;
  bool v2398;
  uint256 v2399;
  uint256 v2400;
  uint256 v2401;
  uint256 v2402;
  uint256 v2403;
  address payable v2405;
  uint256 v2406;
  address payable v2407;
  address payable v2408;
  uint256 v2441;
  T5 v2450;
  uint256 v2454;
  T6[2] v2457;
  uint256 v2458;
  bool v2498;
  uint256 v2509;
  uint256 v2510;
  uint256 v2511;
  uint256 v2512;
  T6 v2513;
  uint256 v2514;
  }
struct T9 {
  uint256 elem0;
  }
enum _enum_T10 {User_buyTicket0_309, User_claim0_309, User_end0_309, User_optin0_309, User_refund0_309}
struct T10 {
  _enum_T10 which;
  T9 _User_buyTicket0_309;
  bool _User_claim0_309;
  bool _User_end0_309;
  bool _User_optin0_309;
  bool _User_refund0_309;
  }
struct T11 {
  uint256 elem0;
  T10 elem1;
  }
struct T12 {
  uint256 elem0;
  bytes30 elem1;
  address payable elem2;
  bool elem3;
  uint256 elem4;
  uint256 elem5;
  uint256 elem6;
  uint256 elem7;
  uint256 elem8;
  uint256 elem9;
  address payable elem10;
  uint256 elem11;
  address payable elem12;
  address payable elem13;
  }
struct T13 {
  address payable v2395;
  bytes30 v2396;
  address payable v2397;
  bool v2398;
  uint256 v2399;
  uint256 v2400;
  uint256 v2401;
  uint256 v2402;
  uint256 v2403;
  uint256 v2404;
  address payable v2405;
  uint256 v2406;
  address payable v2407;
  address payable v2408;
  T6[2] v2417;
  }
struct T14 {
  address payable elem0;
  bytes30 elem1;
  address payable elem2;
  bool elem3;
  uint256 elem4;
  uint256 elem5;
  uint256 elem6;
  uint256 elem7;
  uint256 elem8;
  address payable elem9;
  uint256 elem10;
  address payable elem11;
  address payable elem12;
  uint256 elem13;
  T5 elem14;
  uint256 elem15;
  uint256 elem16;
  T6[2] elem17;
  uint256 elem18;
  }
struct T15 {
  address payable _address;
  uint256 _amount;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set7(T6[2] memory arr, uint256 idx, T6 memory val) internal  returns (T6[2] memory arrp) {
    for (uint256 i = 0; i < 2; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T12 _a);
  event _reach_e1(address _who, T9 _a);
  event _reach_e3(address _who, T11 _a);
  event _reach_oe_v2963(bool v0);
  event _reach_oe_v2986(bool v0);
  event _reach_oe_v3422(bool v0);
  event _reach_oe_v3815(bool v0);
  event _reach_oe_v4210(bool v0);
  event _reach_oe_v4613(bool v0);
  event bought(T15 v0);
  receive () external payable {}
  fallback () external payable {}
  mapping (address => T0) _reachm_0;
  function __reachm_0Ref(address addr) internal view returns (T0 memory res) {
    if (_reachm_0[addr].which == _enum_T0.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(address addr) external view returns (T0 memory res) {
    res = __reachm_0Ref(addr);
    }
  mapping (address => T1) _reachm_1;
  function __reachm_1Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_1[addr].which == _enum_T1.Some) {
      res = _reachm_1[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_1Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_1Ref(addr);
    }
  struct Memory {
    bool nil;
    uint256 _reachr_Info_balance;
    uint256 _reachr_Info_currentSec;
    uint256 _reachr_Info_currentTime;
    bool _reachr_Info_hasDeadlineReached;
    uint256 _reachr_Info_myTicketsAmount;
    bool _reachr_Info_opted;
    T2 _reachr_Info_props;
    uint256 _reachr_Info_ticketsBought;
    uint256 _reachr_Info_ticketsLeft;
    address payable _reachr_Info_token;
    T3 _reachr_Info_winner;
    bool _reachr_User_buyTicket;
    bool _reachr_User_claim;
    bool _reachr_User_end;
    bool _reachr_User_optin;
    bool _reachr_User_refund;
    }
  function _reacha_Info_balance(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(7) /*'(./raffle_token.rsh:46:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_balance = _svs.v2514;
    }
  function _reacha_Info_currentSec(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(8) /*'(./raffle_token.rsh:43:15:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_currentSec = _svs.v2441;
    }
  function _reacha_Info_currentTime(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(9) /*'(./raffle_token.rsh:42:16:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_currentTime = _svs.v2454;
    }
  function _reacha_Info_hasDeadlineReached(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(10) /*'(./raffle_token.rsh:44:23:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_hasDeadlineReached = _svs.v2498;
    }
  function _reacha_Info_myTicketsAmount(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(11) /*'(./raffle_token.rsh:45:20:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_myTicketsAmount = (((__reachm_0Ref((_a))).which == _enum_T0.Some ? (__reachm_0Ref((_a)))._Some : uint256(0)));
    }
  function _reacha_Info_opted(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(12) /*'(./raffle_token.rsh:41:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_opted = ((uint256((__reachm_1Ref((_a))).which)) == uint256(1));
    }
  struct _F7418 {
    T2 v2439;
    }
  function _reacha_Info_props(bool _a, Memory memory _Memory) internal view {
    _F7418 memory _f;
    reachRequire(((current_step == uint256(4))), uint256(13) /*'(./raffle_token.rsh:48:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _f.v2439._amountOfRaffleToken = _svs.v2406;
    _f.v2439._asset = _svs.v2397;
    _f.v2439._cost = _svs.v2402;
    _f.v2439._creator = _svs.v2407;
    _f.v2439._deadline = _svs.v2400;
    _f.v2439._isFeatured = _svs.v2398;
    _f.v2439._maxEntries = _svs.v2403;
    _f.v2439._numberOfTickets = _svs.v2399;
    _f.v2439._projectName = _svs.v2396;
    _f.v2439._raffleToken = _svs.v2405;
    _Memory._reachr_Info_props = _f.v2439;
    }
  function _reacha_Info_ticketsBought(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(14) /*'(./raffle_token.rsh:39:18:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_ticketsBought = (_svs.v2450._currentUserNumber);
    }
  function _reacha_Info_ticketsLeft(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(15) /*'(./raffle_token.rsh:38:16:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_ticketsLeft = (_svs.v2450._ticketsLeft);
    }
  function _reacha_Info_token(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(16) /*'(./raffle_token.rsh:47:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_token = _svs.v2405;
    }
  function _reacha_Info_winner(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(17) /*'(./raffle_token.rsh:40:11:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_Info_winner = (_svs.v2450._winner);
    }
  struct _F7423 {
    T9 v7383;
    T10 v7384;
    }
  function _reacha_User_buyTicket(uint256 _a, Memory memory _Memory) internal  {
    _F7423 memory _f;
    _f.v7383.elem0 = _a;
    _f.v7384.which = _enum_T10.User_buyTicket0_309;
    _f.v7384._User_buyTicket0_309 = _f.v7383;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7384;
    _reachi_3(_ja, _Memory);
    }
  struct _F7424 {
    bool v7388;
    T10 v7389;
    }
  function _reacha_User_claim(bool _a, Memory memory _Memory) internal  {
    _F7424 memory _f;
    _f.v7389.which = _enum_T10.User_claim0_309;
    _f.v7389._User_claim0_309 = _f.v7388;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7389;
    _reachi_3(_ja, _Memory);
    }
  struct _F7425 {
    bool v7392;
    T10 v7393;
    }
  function _reacha_User_end(bool _a, Memory memory _Memory) internal  {
    _F7425 memory _f;
    _f.v7393.which = _enum_T10.User_end0_309;
    _f.v7393._User_end0_309 = _f.v7392;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7393;
    _reachi_3(_ja, _Memory);
    }
  struct _F7426 {
    bool v7396;
    T10 v7397;
    }
  function _reacha_User_optin(bool _a, Memory memory _Memory) internal  {
    _F7426 memory _f;
    _f.v7397.which = _enum_T10.User_optin0_309;
    _f.v7397._User_optin0_309 = _f.v7396;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7397;
    _reachi_3(_ja, _Memory);
    }
  struct _F7427 {
    bool v7400;
    T10 v7401;
    }
  function _reacha_User_refund(bool _a, Memory memory _Memory) internal  {
    _F7427 memory _f;
    _f.v7401.which = _enum_T10.User_refund0_309;
    _f.v7401._User_refund0_309 = _f.v7400;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v7401;
    _reachi_3(_ja, _Memory);
    }
  struct _F7428 {
    T6 v2366;
    T6[2] v2367;
    T6[2] v2413;
    }
  function _reachi_0(T12 memory _a, Memory memory _Memory) internal  {
    _F7428 memory _f;
    reachRequire((! locked), uint256(18) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(19) /*'time check at ./raffle_token.rsh:78:12:dot'*/);
    _f.v2366.elem0 = uint256(0);
    _f.v2366.elem1 = uint256(0);
    _f.v2366.elem2 = false;
    _f.v2367[0] = _f.v2366;
    _f.v2367[1] = _f.v2366;
    _f.v2413 = array_set7(_f.v2367, uint256(0), (T6({elem0: uint256(0), elem1: (_f.v2367[uint256(0)]).elem1, elem2: (_f.v2367[uint256(0)]).elem2})));
    reachRequire(((((_a.elem10) == (_a.elem2)) ? false : true)), uint256(20) /*'(./raffle_token.rsh:78:12:dot,[],Just "non-network tokens distinct")'*/);
    reachRequire((((_a.elem6) <= (_a.elem4))), uint256(21) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:93:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cannot be more that tickets")'*/);
    reachRequire((((_a.elem7) < uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(22) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:94:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cost too large")'*/);
    reachRequire((((_a.elem7) > uint256(1))), uint256(23) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cost too small")'*/);
    
    
    reachRequire((msg.value == uint256(0)), uint256(24) /*'(./raffle_token.rsh:78:12:dot,[],"verify network token pay amount")'*/);
    T13 memory nsvs;
    nsvs.v2395 = payable(msg.sender);
    nsvs.v2396 = (_a.elem1);
    nsvs.v2397 = (_a.elem2);
    nsvs.v2398 = (_a.elem3);
    nsvs.v2399 = (_a.elem4);
    nsvs.v2400 = (_a.elem5);
    nsvs.v2401 = (_a.elem6);
    nsvs.v2402 = (_a.elem7);
    nsvs.v2403 = (_a.elem8);
    nsvs.v2404 = (_a.elem9);
    nsvs.v2405 = (_a.elem10);
    nsvs.v2406 = (_a.elem11);
    nsvs.v2407 = (_a.elem12);
    nsvs.v2408 = (_a.elem13);
    nsvs.v2417 = (array_set7(_f.v2413, uint256(1), (T6({elem0: uint256(0), elem1: (_f.v2413[uint256(1)]).elem1, elem2: (_f.v2413[uint256(1)]).elem2}))));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F7429 {
    T6[2] v2437;
    T3 v2448;
    T5 v2449;
    }
  function _reachi_1(T9 memory _a, Memory memory _Memory) internal  {
    _F7429 memory _f;
    reachRequire((current_step == uint256(1)), uint256(25) /*'state check at ./raffle_token.rsh:99:12:dot'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    reachRequire((! locked), uint256(26) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(27) /*'time check at ./raffle_token.rsh:99:12:dot'*/);
    reachRequire((msg.value == _svs.v2404), uint256(28) /*'(./raffle_token.rsh:99:12:dot,[],"verify network token pay amount")'*/);
    _f.v2437 = array_set7(_svs.v2417, uint256(1), (T6({elem0: (unsafeAdd(((_svs.v2417[uint256(1)]).elem0), _svs.v2406)), elem1: (_svs.v2417[uint256(1)]).elem1, elem2: (_svs.v2417[uint256(1)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v2405, _svs.v2406)), uint256(29) /*'(./raffle_token.rsh:99:12:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v2395 == payable(msg.sender))), uint256(30) /*'(./raffle_token.rsh:99:12:dot,[],Just "sender correct")'*/);
    _f.v2448.which = _enum_T3.None;
    _f.v2448._None = false;
    _f.v2449._bal = ((_f.v2437[uint256(0)]).elem0);
    _f.v2449._currentUserNumber = uint256(0);
    _f.v2449._keepGoing = true;
    _f.v2449._percent = uint256(5);
    _f.v2449._raffleBal = ((_f.v2437[uint256(1)]).elem0);
    _f.v2449._ticketsLeft = _svs.v2399;
    _f.v2449._winner = _f.v2448;
    T14  memory _ja;
    _ja.elem0 = _svs.v2395;
    _ja.elem1 = _svs.v2396;
    _ja.elem2 = _svs.v2397;
    _ja.elem3 = _svs.v2398;
    _ja.elem4 = _svs.v2399;
    _ja.elem5 = _svs.v2400;
    _ja.elem6 = _svs.v2401;
    _ja.elem7 = _svs.v2402;
    _ja.elem8 = _svs.v2403;
    _ja.elem9 = _svs.v2405;
    _ja.elem10 = _svs.v2406;
    _ja.elem11 = _svs.v2407;
    _ja.elem12 = _svs.v2408;
    _ja.elem13 = (safeAdd(uint256(block.timestamp), _svs.v2400));
    _ja.elem14 = _f.v2449;
    _ja.elem15 = uint256(block.number);
    _ja.elem16 = uint256(block.timestamp);
    _ja.elem17 = _f.v2437;
    _ja.elem18 = _svs.v2404;
    _reachl_2(_ja, _Memory);
    }
  struct _F7430 {
    T9 v2793;
    uint256 v2800;
    uint256 v2803;
    uint256 v2809;
    T6[2] v2931;
    T15 v2954;
    uint256 v2955;
    bool v2957;
    bool v2960;
    T3 v2983;
    T5 v2984;
    T5 v3006;
    bool v3195;
    address payable v3203;
    T6[2] v3405;
    uint256 v3412;
    T6[2] v3421;
    T5 v3437;
    T5 v3839;
    T0 v4348;
    uint256 v4349;
    uint256 v4350;
    T5 v4631;
    }
  function _reachi_3(T11 memory _a, Memory memory _Memory) internal  {
    _F7430 memory _f;
    reachRequire((current_step == uint256(4)), uint256(31) /*'state check at ./raffle_token.rsh:130:37:dot'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    reachRequire((! locked), uint256(32) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(33) /*'time check at ./raffle_token.rsh:130:37:dot'*/);
    if ((_a.elem1).which == _enum_T10.User_buyTicket0_309) {
    _f.v2793 = (_a.elem1)._User_buyTicket0_309;
    _f.v2800 = ((__reachm_0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachm_0Ref(payable(msg.sender)))._Some : uint256(0));
    reachRequire(((_svs.v2454 < _svs.v2441)), uint256(34) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Deadline reached cannot enter")'*/);
    _f.v2803 = safeAdd(_f.v2800, (_f.v2793.elem0));
    reachRequire(((_svs.v2403 >= _f.v2803)), uint256(35) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Limit reached")'*/);
    reachRequire((((safeAdd((_f.v2793.elem0), _f.v2800)) <= _svs.v2399)), uint256(36) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:161:50:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:161:50:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Cannot buy more tickets than balance")'*/);
    _f.v2809 = safeMul((_f.v2793.elem0), _svs.v2402);
    reachRequire((msg.value == uint256(0)), uint256(37) /*'(./raffle_token.rsh:130:37:dot,[],"verify network token pay amount")'*/);
    _f.v2931 = array_set7(_svs.v2457, uint256(0), (T6({elem0: (unsafeAdd(_svs.v2514, _f.v2809)), elem1: _svs.v2513.elem1, elem2: _svs.v2513.elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v2397, _f.v2809)), uint256(38) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2405, uint256(0))), uint256(39) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    _reachm_0[payable(msg.sender)].which = _enum_T0.Some;
    _reachm_0[payable(msg.sender)]._Some = _f.v2803;
    
    _f.v2954._address = payable(msg.sender);
    _f.v2954._amount = (_f.v2793.elem0);
    emit bought( _f.v2954);
    _f.v2955 = safeAdd(_svs.v2509, uint256(1));
    if ((_f.v2955 == _svs.v2401)) {
      _f.v2957 = true;
      }
    else {
      if ((_f.v2955 <= _svs.v2401)) {
        _f.v2960 = ((safeAdd(_svs.v2509, (_f.v2793.elem0))) >= _svs.v2401);
        }
      else {
        _f.v2960 = false;
        }
      _f.v2957 = _f.v2960;
      }
    if (_f.v2957) {
      emit _reach_oe_v2963( (true));
      _Memory._reachr_User_buyTicket = (true);
      _f.v2983.which = _enum_T3.Some;
      _f.v2983._Some = payable(msg.sender);
      _f.v2984._bal = (safeAdd(_svs.v2510, _f.v2809));
      _f.v2984._currentUserNumber = (safeAdd(_svs.v2509, (_f.v2793.elem0)));
      _f.v2984._keepGoing = (_svs.v2450._keepGoing);
      _f.v2984._percent = (_svs.v2450._percent);
      _f.v2984._raffleBal = _svs.v2512;
      _f.v2984._ticketsLeft = (safeSub(_svs.v2511, (_f.v2793.elem0)));
      _f.v2984._winner = _f.v2983;
      T14  memory _ja;
      _ja.elem0 = _svs.v2395;
      _ja.elem1 = _svs.v2396;
      _ja.elem2 = _svs.v2397;
      _ja.elem3 = _svs.v2398;
      _ja.elem4 = _svs.v2399;
      _ja.elem5 = _svs.v2400;
      _ja.elem6 = _svs.v2401;
      _ja.elem7 = _svs.v2402;
      _ja.elem8 = _svs.v2403;
      _ja.elem9 = _svs.v2405;
      _ja.elem10 = _svs.v2406;
      _ja.elem11 = _svs.v2407;
      _ja.elem12 = _svs.v2408;
      _ja.elem13 = _svs.v2441;
      _ja.elem14 = _f.v2984;
      _ja.elem15 = uint256(block.number);
      _ja.elem16 = uint256(block.timestamp);
      _ja.elem17 = _f.v2931;
      _ja.elem18 = _svs.v2458;
      _reachl_2(_ja, _Memory);
      }
    else {
      emit _reach_oe_v2986( (true));
      _Memory._reachr_User_buyTicket = (true);
      _f.v3006._bal = (safeAdd(_svs.v2510, _f.v2809));
      _f.v3006._currentUserNumber = (safeAdd(_svs.v2509, (_f.v2793.elem0)));
      _f.v3006._keepGoing = (_svs.v2450._keepGoing);
      _f.v3006._percent = (_svs.v2450._percent);
      _f.v3006._raffleBal = _svs.v2512;
      _f.v3006._ticketsLeft = (safeSub(_svs.v2511, (_f.v2793.elem0)));
      _f.v3006._winner = (_svs.v2450._winner);
      T14  memory _ja;
      _ja.elem0 = _svs.v2395;
      _ja.elem1 = _svs.v2396;
      _ja.elem2 = _svs.v2397;
      _ja.elem3 = _svs.v2398;
      _ja.elem4 = _svs.v2399;
      _ja.elem5 = _svs.v2400;
      _ja.elem6 = _svs.v2401;
      _ja.elem7 = _svs.v2402;
      _ja.elem8 = _svs.v2403;
      _ja.elem9 = _svs.v2405;
      _ja.elem10 = _svs.v2406;
      _ja.elem11 = _svs.v2407;
      _ja.elem12 = _svs.v2408;
      _ja.elem13 = _svs.v2441;
      _ja.elem14 = _f.v3006;
      _ja.elem15 = uint256(block.number);
      _ja.elem16 = uint256(block.timestamp);
      _ja.elem17 = _f.v2931;
      _ja.elem18 = _svs.v2458;
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T10.User_claim0_309) {
    reachRequire((((uint256((_svs.v2450._winner).which)) == uint256(1))), uint256(40) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Winner has not been determined")'*/);
    _f.v3195 = _svs.v2511 == uint256(0);
    reachRequire(((_svs.v2498 ? _f.v3195 : false)), uint256(41) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Cannot claim yet")'*/);
    reachRequire(((_svs.v2512 <= ((_svs.v2457[uint256(1)]).elem0))), uint256(42) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Error transferring")'*/);
    _f.v3203 = ((_svs.v2450._winner).which == _enum_T3.Some ? (_svs.v2450._winner)._Some : _svs.v2395);
    reachRequire(((_f.v3203 == payable(msg.sender))), uint256(43) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:265:26:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:265:26:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Not winner")'*/);
    reachRequire((msg.value == uint256(0)), uint256(44) /*'(./raffle_token.rsh:130:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2397, uint256(0))), uint256(45) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2405, uint256(0))), uint256(46) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((((uint256(block.timestamp) >= _svs.v2441) ? _f.v3195 : false)), uint256(47) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:280:13:application call to [unknown function] (defined at: ./raffle_token.rsh:280:13:function exp)],Just "Cannot claim yet")'*/);
    _f.v3405 = array_set7(_svs.v2457, uint256(1), (T6({elem0: (unsafeSub(((_svs.v2457[uint256(1)]).elem0), ((_svs.v2457[uint256(1)]).elem0))), elem1: (_svs.v2457[uint256(1)]).elem1, elem2: (_svs.v2457[uint256(1)]).elem2})));
    safeTokenTransfer(_svs.v2405, _f.v3203, ((_svs.v2457[uint256(1)]).elem0));
    _f.v3412 = safeSub(((_f.v3405[uint256(0)]).elem0), (safeDiv((safeMul(((_f.v3405[uint256(0)]).elem0), uint256(5))), uint256(100))));
    _f.v3421 = array_set7(_f.v3405, uint256(0), (T6({elem0: (unsafeSub(((_f.v3405[uint256(0)]).elem0), _f.v3412)), elem1: (_f.v3405[uint256(0)]).elem1, elem2: (_f.v3405[uint256(0)]).elem2})));
    safeTokenTransfer(_svs.v2397, _svs.v2395, _f.v3412);
    emit _reach_oe_v3422( (true));
    _Memory._reachr_User_claim = (true);
    _f.v3437._bal = ((_f.v3421[uint256(0)]).elem0);
    _f.v3437._currentUserNumber = _svs.v2509;
    _f.v3437._keepGoing = false;
    _f.v3437._percent = (_svs.v2450._percent);
    _f.v3437._raffleBal = uint256(0);
    _f.v3437._ticketsLeft = _svs.v2511;
    _f.v3437._winner = (_svs.v2450._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v2395;
    _ja.elem1 = _svs.v2396;
    _ja.elem2 = _svs.v2397;
    _ja.elem3 = _svs.v2398;
    _ja.elem4 = _svs.v2399;
    _ja.elem5 = _svs.v2400;
    _ja.elem6 = _svs.v2401;
    _ja.elem7 = _svs.v2402;
    _ja.elem8 = _svs.v2403;
    _ja.elem9 = _svs.v2405;
    _ja.elem10 = _svs.v2406;
    _ja.elem11 = _svs.v2407;
    _ja.elem12 = _svs.v2408;
    _ja.elem13 = _svs.v2441;
    _ja.elem14 = _f.v3437;
    _ja.elem15 = uint256(block.number);
    _ja.elem16 = uint256(block.timestamp);
    _ja.elem17 = _f.v3421;
    _ja.elem18 = _svs.v2458;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_end0_309) {
    reachRequire((((payable(msg.sender) == _svs.v2395) ? true : (payable(msg.sender) == _svs.v2408))), uint256(48) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:300:24:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Don't have administrative rights to perform action")'*/);
    reachRequire(((_svs.v2511 == _svs.v2399)), uint256(49) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:307:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:300:24:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:300:24:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Cannot end contract")'*/);
    reachRequire((msg.value == uint256(0)), uint256(50) /*'(./raffle_token.rsh:130:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2397, uint256(0))), uint256(51) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2405, uint256(0))), uint256(52) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v3815( (true));
    _Memory._reachr_User_end = (true);
    safeTokenTransfer(_svs.v2405, payable(msg.sender), ((_svs.v2457[uint256(1)]).elem0));
    _f.v3839._bal = _svs.v2510;
    _f.v3839._currentUserNumber = _svs.v2509;
    _f.v3839._keepGoing = false;
    _f.v3839._percent = (_svs.v2450._percent);
    _f.v3839._raffleBal = _svs.v2512;
    _f.v3839._ticketsLeft = _svs.v2511;
    _f.v3839._winner = (_svs.v2450._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v2395;
    _ja.elem1 = _svs.v2396;
    _ja.elem2 = _svs.v2397;
    _ja.elem3 = _svs.v2398;
    _ja.elem4 = _svs.v2399;
    _ja.elem5 = _svs.v2400;
    _ja.elem6 = _svs.v2401;
    _ja.elem7 = _svs.v2402;
    _ja.elem8 = _svs.v2403;
    _ja.elem9 = _svs.v2405;
    _ja.elem10 = _svs.v2406;
    _ja.elem11 = _svs.v2407;
    _ja.elem12 = _svs.v2408;
    _ja.elem13 = _svs.v2441;
    _ja.elem14 = _f.v3839;
    _ja.elem15 = uint256(block.number);
    _ja.elem16 = uint256(block.timestamp);
    _ja.elem17 = (array_set7(_svs.v2457, uint256(1), (T6({elem0: (unsafeSub(((_svs.v2457[uint256(1)]).elem0), ((_svs.v2457[uint256(1)]).elem0))), elem1: (_svs.v2457[uint256(1)]).elem1, elem2: (_svs.v2457[uint256(1)]).elem2}))));
    _ja.elem18 = _svs.v2458;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_optin0_309) {
    reachRequire((msg.value == uint256(0)), uint256(53) /*'(./raffle_token.rsh:130:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2397, uint256(0))), uint256(54) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2405, uint256(0))), uint256(55) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v4210( (false));
    _Memory._reachr_User_optin = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v2395;
    _ja.elem1 = _svs.v2396;
    _ja.elem2 = _svs.v2397;
    _ja.elem3 = _svs.v2398;
    _ja.elem4 = _svs.v2399;
    _ja.elem5 = _svs.v2400;
    _ja.elem6 = _svs.v2401;
    _ja.elem7 = _svs.v2402;
    _ja.elem8 = _svs.v2403;
    _ja.elem9 = _svs.v2405;
    _ja.elem10 = _svs.v2406;
    _ja.elem11 = _svs.v2407;
    _ja.elem12 = _svs.v2408;
    _ja.elem13 = _svs.v2441;
    _ja.elem14 = _svs.v2450;
    _ja.elem15 = uint256(block.number);
    _ja.elem16 = uint256(block.timestamp);
    _ja.elem17 = _svs.v2457;
    _ja.elem18 = _svs.v2458;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_refund0_309) {
    _f.v4348 = __reachm_0Ref(payable(msg.sender));
    _f.v4349 = (_f.v4348.which == _enum_T0.Some ? _f.v4348._Some : uint256(0));
    _f.v4350 = safeMul(_f.v4349, _svs.v2402);
    reachRequire((_svs.v2498), uint256(56) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Deadline not reached cannot refund")'*/);
    reachRequire((((uint256(_f.v4348.which)) == uint256(1))), uint256(57) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "You do not qualify for refund")'*/);
    reachRequire(((_f.v4349 > uint256(0))), uint256(58) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "You cannot be refund cus your stake is 0")'*/);
    reachRequire(((_f.v4350 <= _svs.v2514)), uint256(59) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:243:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Contract balance insufficient")'*/);
    reachRequire(((_svs.v2509 > uint256(0))), uint256(60) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:231:27:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:231:27:function exp),at ./raffle_token.rsh:130:37:application call to [unknown function] (defined at: ./raffle_token.rsh:130:37:function exp),at ./raffle_token.rsh:144:14:application call to [unknown function] (defined at: ./raffle_token.rsh:144:14:function exp)],Just "Can't get a refund because pool is empty")'*/);
    reachRequire((msg.value == uint256(0)), uint256(61) /*'(./raffle_token.rsh:130:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2397, uint256(0))), uint256(62) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2405, uint256(0))), uint256(63) /*'(./raffle_token.rsh:130:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((uint256(block.timestamp) >= _svs.v2441)), uint256(64) /*'(reach standard library:57:5:application,[at ./raffle_token.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_token.rsh:250:15:application call to [unknown function] (defined at: ./raffle_token.rsh:250:15:function exp)],Just "Deadline not reached cannot refund")'*/);
    safeTokenTransfer(_svs.v2397, payable(msg.sender), _f.v4350);
    _reachm_0[payable(msg.sender)].which = _enum_T0.Some;
    _reachm_0[payable(msg.sender)]._Some = uint256(0);
    
    emit _reach_oe_v4613( (true));
    _Memory._reachr_User_refund = (true);
    _f.v4631._bal = (safeSub(_svs.v2510, _f.v4350));
    _f.v4631._currentUserNumber = (safeSub(_svs.v2509, _f.v4349));
    _f.v4631._keepGoing = (_svs.v2450._keepGoing);
    _f.v4631._percent = (_svs.v2450._percent);
    _f.v4631._raffleBal = _svs.v2512;
    _f.v4631._ticketsLeft = (safeAdd(_svs.v2511, _f.v4349));
    _f.v4631._winner = (_svs.v2450._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v2395;
    _ja.elem1 = _svs.v2396;
    _ja.elem2 = _svs.v2397;
    _ja.elem3 = _svs.v2398;
    _ja.elem4 = _svs.v2399;
    _ja.elem5 = _svs.v2400;
    _ja.elem6 = _svs.v2401;
    _ja.elem7 = _svs.v2402;
    _ja.elem8 = _svs.v2403;
    _ja.elem9 = _svs.v2405;
    _ja.elem10 = _svs.v2406;
    _ja.elem11 = _svs.v2407;
    _ja.elem12 = _svs.v2408;
    _ja.elem13 = _svs.v2441;
    _ja.elem14 = _f.v4631;
    _ja.elem15 = uint256(block.number);
    _ja.elem16 = uint256(block.timestamp);
    _ja.elem17 = (array_set7(_svs.v2457, uint256(0), (T6({elem0: (unsafeSub(_svs.v2514, _f.v4350)), elem1: _svs.v2513.elem1, elem2: _svs.v2513.elem2}))));
    _ja.elem18 = _svs.v2458;
    _reachl_2(_ja, _Memory);
    }
    }
  function _reachl_2(T14 memory _a, Memory memory _Memory) internal  {
    if ((_a.elem14._keepGoing)) {
      T8 memory nsvs;
      nsvs.v2395 = _a.elem0;
      nsvs.v2396 = _a.elem1;
      nsvs.v2397 = _a.elem2;
      nsvs.v2398 = _a.elem3;
      nsvs.v2399 = _a.elem4;
      nsvs.v2400 = _a.elem5;
      nsvs.v2401 = _a.elem6;
      nsvs.v2402 = _a.elem7;
      nsvs.v2403 = _a.elem8;
      nsvs.v2405 = _a.elem9;
      nsvs.v2406 = _a.elem10;
      nsvs.v2407 = _a.elem11;
      nsvs.v2408 = _a.elem12;
      nsvs.v2441 = _a.elem13;
      nsvs.v2450 = _a.elem14;
      nsvs.v2454 = _a.elem16;
      nsvs.v2457 = _a.elem17;
      nsvs.v2458 = _a.elem18;
      nsvs.v2498 = (_a.elem16 >= _a.elem13);
      nsvs.v2509 = (_a.elem14._currentUserNumber);
      nsvs.v2510 = (_a.elem14._bal);
      nsvs.v2511 = (_a.elem14._ticketsLeft);
      nsvs.v2512 = (_a.elem14._raffleBal);
      nsvs.v2513 = (_a.elem17[uint256(0)]);
      nsvs.v2514 = ((_a.elem17[uint256(0)]).elem0);
      current_step = uint256(4);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _a.elem12.transfer(_a.elem18);
      safeTokenTransfer(_a.elem2, _a.elem12, ((_a.elem17[uint256(0)]).elem0));
      safeTokenTransfer(_a.elem9, _a.elem12, (((array_set7(_a.elem17, uint256(0), (T6({elem0: (unsafeSub(((_a.elem17[uint256(0)]).elem0), ((_a.elem17[uint256(0)]).elem0))), elem1: (_a.elem17[uint256(0)]).elem1, elem2: (_a.elem17[uint256(0)]).elem2}))))[uint256(1)]).elem0));
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function Info_balance() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_balance(_ja, _Memory);
    return _Memory._reachr_Info_balance;
    }
  function Info_currentSec() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_currentSec(_ja, _Memory);
    return _Memory._reachr_Info_currentSec;
    }
  function Info_currentTime() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_currentTime(_ja, _Memory);
    return _Memory._reachr_Info_currentTime;
    }
  function Info_hasDeadlineReached() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_hasDeadlineReached(_ja, _Memory);
    return _Memory._reachr_Info_hasDeadlineReached;
    }
  function Info_myTicketsAmount(address payable v7366) external view returns (uint256) {
    Memory memory _Memory;
    _reacha_Info_myTicketsAmount(v7366, _Memory);
    return _Memory._reachr_Info_myTicketsAmount;
    }
  function Info_opted(address payable v7370) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_opted(v7370, _Memory);
    return _Memory._reachr_Info_opted;
    }
  function Info_props() external view returns (T2 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_props(_ja, _Memory);
    return _Memory._reachr_Info_props;
    }
  function Info_ticketsBought() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_ticketsBought(_ja, _Memory);
    return _Memory._reachr_Info_ticketsBought;
    }
  function Info_ticketsLeft() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_ticketsLeft(_ja, _Memory);
    return _Memory._reachr_Info_ticketsLeft;
    }
  function Info_token() external view returns (address payable) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_token(_ja, _Memory);
    return _Memory._reachr_Info_token;
    }
  function Info_winner() external view returns (T3 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_winner(_ja, _Memory);
    return _Memory._reachr_Info_winner;
    }
  function User_buyTicket(uint256 v7386) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_User_buyTicket(v7386, _Memory);
    return _Memory._reachr_User_buyTicket;
    }
  function User_claim() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_claim(_ja, _Memory);
    return _Memory._reachr_User_claim;
    }
  function User_end() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_end(_ja, _Memory);
    return _Memory._reachr_User_end;
    }
  function User_optin() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_optin(_ja, _Memory);
    return _Memory._reachr_User_optin;
    }
  function User_refund() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_refund(_ja, _Memory);
    return _Memory._reachr_User_refund;
    }
  constructor(T12 memory v7405) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v7405, _Memory);
    }
  function _reachp_1(T9 calldata v7408) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v7408, _Memory);
    }
  function _reachp_3(T11 calldata v7411) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v7411, _Memory);
    }
  }
